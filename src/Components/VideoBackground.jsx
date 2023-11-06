import React from 'react'
import { useSelector } from 'react-redux';
import useGetTrailer from '../hooks/useGetTrailer';

const VideoBackground = ({ id }) => {

    useGetTrailer({ id });
    const trailerVideo = useSelector(store => store.movies?.trailerVideo);


    return (
        <div className='w-screen'>
            <iframe title="movieTrailer" className='w-screen aspect-video'
                src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay=1&mute=1"}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">

            </iframe>
        </div>
    )
}

export default VideoBackground