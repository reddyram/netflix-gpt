import React from 'react'
import { useSelector } from 'react-redux';
import useGetTrailer from '../hooks/useGetTrailer';
import { POSTER_PATH } from '../Utils/constants';

const VideoBackground = ({ id }) => {
    console.log(id);

    useGetTrailer({ id });
    const trailerVideo = useSelector(store => store.movies?.trailerVideo);
    const bg_image = useSelector(store => store.movies?.nowPlayingMovies?.results[0]?.poster_path)
    console.log(bg_image);


    return (
        <div className='w-screen bg-black'>
            <iframe title="movieTrailer" className='invisible h-[0] md:h-[50%] md:visible md:w-screen md:aspect-video'
                src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay=1&mute=1&rel=0"}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
            </iframe>
            <img className="visible sm:invisible sm:h-0" alt="bg image" src={POSTER_PATH + bg_image}>
            </img>
        </div>
    )
}

export default VideoBackground