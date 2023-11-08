import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../hooks/usePopularMovies'
import { useSelector } from 'react-redux'
import GptSearch from './GptSearch'

const Browse = () => {

  const gptSearchView = useSelector(store => store.gpt.showGptSearch)

  useNowPlayingMovies();
  useTopRatedMovies();
  usePopularMovies();

  return (
    <div>
      <Header />
      {gptSearchView ? <GptSearch /> : <><MainContainer />
        <SecondaryContainer /></>}

    </div>
  )
}

export default Browse;