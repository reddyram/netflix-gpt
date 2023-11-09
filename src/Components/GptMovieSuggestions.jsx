import React from 'react'
import { addMovieSearchResults } from "../Utils/movieSlice";
import { useSelector } from 'react-redux';
import MovieList from './MovieList';
import { BG_IMAGE } from '../Utils/constants';

const GptMovieSuggestions = () => {
    const searchResults = useSelector(store => store.movies?.movieSearchRes);
    //console.log(searchResults);
    if (!searchResults) return null;


    //console.log(searchResults);
    return (
        <div className='bg-black h-screen'>
            <h1 className='text-3xl font-bold pl-12'>Search Results</h1>
            <div className="relative pl-12">
                {
                    searchResults ? <MovieList title={"Search Results"} moviesdata={searchResults} /> : null

                }

            </div>
        </div>
    )
}

export default GptMovieSuggestions