import React from 'react'
import { POSTER_PATH } from '../Utils/constants'

const MovieCard = ({ mv }) => {
    //console.log(mv.poster_path);
    return (
        mv.poster_path && (
            <div className='w-[150px] h-[250px] mr-4'>
                <img className="w-[146px] h-[222px]" alt={mv.title} src={POSTER_PATH + mv.poster_path
                } />
            </div>)

    )
}

export default MovieCard