import 'reflect-metadata';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class MovieEntity {
    @PrimaryGeneratedColumn() id: number
    @Column() title: string
    @Column() year: number
    // @Column() runtime: number //minutes
    // genre: string[]
    // actors: string[]
    // @Column() plote: string
    // @Column() language: string
    // @Column() imdbRating: number
    // @Column() imdbID: string
    @Column() path: string
}