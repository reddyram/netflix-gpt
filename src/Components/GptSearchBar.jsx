import React, { useRef } from 'react'
import openai from '../Utils/openai';
import useGetGptMovies from '../hooks/useGetGptMovies';
import { useDispatch } from 'react-redux';
import { addMovieSearchResults } from "../Utils/movieSlice";
import { useSelector } from 'react-redux';
import MovieList from './MovieList';


const GptSearchBar = () => {
    const searchText = useRef(null);
    const dispatch = useDispatch();


    const handleSearchBtn = async (e) => {
        e.preventDefault();
        const srchTxt = searchText.current.value;

        const gptQuery = "Act as a movie recommendation engine and suggest some movies for the query: " + srchTxt + ". Only give me 5 movies as comma separated like the example ahead. Example: Don, Don, 3 idiots, sholay, abcd";
        const gptResults = await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo',
        });
        dispatch(addMovieSearchResults(gptResults.choices[0]?.message?.content));
    }

    //const searchResults = useSelector(store => store.movies?.movieSearch).split(",");
    //console.log(searchResults[0]);

    useGetGptMovies();

    const searchResults = useSelector(store => store.movies?.movieSearchRes);
    //console.log(searchResults);

    return (
        <div className='border-black'>
            <form className='flex flex-col sm:flex-row justify-center items-center'>
                <input ref={searchText} type='text' className='w-[90%] md:w-3/4 p-4 my-4 border-solid 2px black rounded-lg' placeholder='What would you like to watch today?' />
                <button className='m-4 bg-red-800 w-[100px] rounded-lg text-white h-[50px]' onClick={handleSearchBtn}>Search</button>
            </form>
        </div>
    )
}

export default GptSearchBar