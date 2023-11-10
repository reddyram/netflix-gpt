import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, moviesdata }) => {
    // console.log(title);
    // console.log(moviesdata);
    return (
        <div className=''>
            <h1 className='text-3xl font-bold text-white'>{title}</h1>
            <div className='flex mt-5'>
                <div className='flex flex-wrap justify-center sm:justify-start items-center'>
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