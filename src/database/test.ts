// import 'reflect-metadata';
// import * as sqlite3 from 'sqlite3';
import { MovieEntity } from './entities/MovieEnttity';

import {createConnection} from 'typeorm';

// let databaseDir = process.env['DB_DIR'] || 'tmp'

// let dbFilePAth = `${databaseDir}/movies.sqlite`
// let db = new sqlite3.Database(dbFilePAth, (err) => {
//   if (err) {
//     return console.error(err.message);
//   }
//   console.log('Connected to the SQlite database.');
// });

// db.close();

// createConnection(
//  {
//    type: 'sqlite',
//    database: 'tmp/abcd.sqlite',
//    entities: [MovieEntity]
//  }
// ).then(

//   conn => {
//     // conn.runMigrations()
//     conn.manager.save(movie)
//   }
// )
// createConnection

// repository.save(movie);

// import {createConnection} from "typeorm";
// import {movie} from "./entity/movie";

createConnection(
   {
     type: 'sqlite',
     database: 'tmp/abcd.sqlite',
     entities: [MovieEntity],
     synchronize: true,
   }).then(async connection => {

    console.log('Inserting a new movie into the database...');
    const movie = new MovieEntity();
    movie.title = 'Timber';
    movie.year = 2007;
    movie.path = 4

    await connection.manager.save(movie);
    console.log('Saved a new movie with id: ' + movie.id);

    console.log('Loading movies from the database...');
    const movies = await connection.manager.find(MovieEntity);
    console.log('Loaded movies: ', movies);

    console.log('Here you can setup and run express/koa/any other framework.');

}).catch(error => console.log(error));
