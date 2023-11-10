import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies);

    if (movies === undefined) return;
    // console.log(movies?.nowPlayingMovies?.results);
    // console.log(movies?.topRated?.results);
    // console.log(movies?.popularMovies?.results);

    return (
        <div className=" bg-black w-screen">
            <div className=" -mt-30 sm:-mt-80 sm:p-10 relative z-20 pl-6">
                <MovieList title={"Now Playing Movies"} moviesdata={movies?.nowPlayingMovies?.results} />
                <MovieList title={"Top Rated Movies"} moviesdata={movies?.topRated?.results} />
                <MovieList title={"Popular Movies"} moviesdata={movies?.popularMovies?.results} />
            </div>
        </div >
    )
}

export default SecondaryContainer