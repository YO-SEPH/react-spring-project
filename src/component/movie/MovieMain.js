import React from 'react';
import { dummy } from '../../pages/movie/MovieDummy'
import { Movie } from './Movie';
import './Movie.css'

function MovieMain() {
    return (
        <>
        <h1 align="center">Playing Movie List </h1>
            <div className='Main-container'>
                {
                     dummy.results.map((item)=> {
                         return (
                            <Movie
                                title={item.title}
                                poster_path={item.poster_path}
                                vote_average={item.vote_average}
                                overview={item.overview}
                            />
                         )
                     }) 
                }
            </div>
        </>
    )
}

export default MovieMain;