import React from 'react';
import { POSTER_PATH } from '../Utils/constants';
import { Link } from "react-router-dom";

const MovieCard = ({ mv }) => {
    //console.log(mv.poster_path);

    const handleMovieCardClick = () => {

    }

    return (
        mv.poster_path && (
            <Link to={"/movie/" + mv.id} key={mv.id}>
                <div className='w-[150px] h-[250px] mr-4' onClick={handleMovieCardClick}>
                    <img className="w-[146px] h-[222px]" alt={mv.title} src={POSTER_PATH + mv.poster_path
                    } />
                </div>
            </Link>)

    )
}

export default MovieCard