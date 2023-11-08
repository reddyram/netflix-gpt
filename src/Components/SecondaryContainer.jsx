import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies);
    return (
        <div className=" bg-black w-screen">
            <div className=" -mt-52 relative z-20 pl-12">
                <MovieList title={"Now Playing Movies"} moviesdata={movies.nowPlayingMovies} />
                <MovieList title={"Top Rated Movies"} moviesdata={movies.topRated} />
                <MovieList title={"Popular Movies"} moviesdata={movies.popularMovies} />
            </div>
        </div >
    )
}

export default SecondaryContainer