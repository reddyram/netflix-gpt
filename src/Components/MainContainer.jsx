import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';
import { useState, useEffect } from 'react';

const MainContainer = () => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies?.results);

    //early return
    if (!movies) return;

    const mainMovie = movies[0];
    const { original_title, overview, id } = mainMovie;

    return (
        <div>
            <VideoTitle title={original_title} overview={overview} id={id} />
            <VideoBackground id={id} />
        </div>
    )
}

export default MainContainer