import * as fs from 'fs'
import * as path from 'path'

import * as walk from 'walk'
import { stringify } from 'querystring';
import {EventEmitter} from 'events'

export interface IScannerConfig {
    minimumSize?: number
    extensions?: string[]

}


export type ScannerState = 'scanning' | 'finished' | 'never'

interface MediaFileInfo {
    name: string,
    size: number,
    path: string
}

export default class MediaFileScanner {

    state: ScannerState = "never"
    medialFileExt: string[] = [".mp4", '.mkv']
    result: MediaFileInfo[] = []
    elapasedTImeMs:number;

    private _shouldNext: boolean = false
    
    constructor(
        private rootDirectory: String,
        private config?: IScannerConfig) {

    }

    getState(): ScannerState {
        return this.state
    }

    stopScan() {
        this._shouldNext = false;
    }

    startScan(callback) {
        this._shouldNext = true;
        let startTime = new Date();
        console.log(this.rootDirectory)
        let options = {
            followLinks: false
            // directories with these keys will be skipped
            , filters: [".mkv", "_Temp"]
        };

        let walker = walk.walk(this.rootDirectory, options);
        walker.on("file", (root, fileStats, next) => {
            if (this.medialFileExt.find(ext => { return fileStats.name.endsWith(ext) })) {
                let minfo =                     {
                    name: fileStats.name,
                    size: fileStats.size,
                    path: path.join(root, fileStats.name)

                }
                this.result.push(minfo)
                callback && callback(minfo)
            }
            if(this._shouldNext) next()
        })
        walker.on("errors", (root, nodeStatsArray, next) => {
            if(this._shouldNext) next()
        });

        let scanPromis = new Promise<boolean>((resolve, reject)=>{
            walker.on("end", ()=>{
                // this.elapasedTImeMs =Math.round( (new Date()) - startTime)
                resolve(true)
            });
        })

        return scanPromis
    }
}




// let sc = (new MediaFileScanner("/media/gandalf/tmp/"))

// // sc.startScan().then(r => {
// //     console.log(r)
// //     console.log(sc.result)
// // })


// async  function test(){
//     await sc.startScan((m)=>console.log(m))
//     // console.log(sc.result)
//     console.log("END")
// }


// test().then(console.log)
