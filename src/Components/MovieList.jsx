import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, moviesdata }) => {
    // console.log(title);
    // console.log(moviesdata);
    return (
        <div className=''>
            <h1 className='pl-4 sm:pl-0 text-3xl font-bold text-white'>{title}</h1>
            <div className='flex mt-5'>
                <div className='[&::-webkit-scrollbar]:hidden flex flex-wrap sm:flex-nowrap sm:overflow-auto justify-center sm:justify-start items-center'>
                    {
                        moviesdata?.map((mv) =>
                            <MovieCard mv={mv} key={mv.id} />
                        )
                    }

                </div>
            </div>
        </div>
    )
}

export default MovieList