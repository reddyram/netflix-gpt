import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, moviesdata }) => {
    // console.log(title);
    // console.log(moviesdata);
    return (
        <div className=''>
            <h1 className='text-3xl font-bold text-white'>{title}</h1>
            <div className='flex overflow-x-scroll no-scrollbar mt-4'>
                <div className='flex'>
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