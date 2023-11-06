import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies?.results);

    if (!movies) return; //early return

    const mainMovie = movies[0];

    // console.log(mainMovie.id);

    const { original_title, overview, id } = mainMovie;
    //console.log(id);

    return (
        <div>
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackground id={id} />
        </div>
    )
}

export default MainContainer