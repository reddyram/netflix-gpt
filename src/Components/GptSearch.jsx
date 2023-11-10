import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BG_IMAGE } from '../Utils/constants'

const GptSearch = () => {
    return (
        <>
            <div className="absolute -z-10">
                <img
                    className='w-screen h-screen object-cover'
                    src={BG_IMAGE}
                    alt="logo"
                />
            </div>
            <div className='pt-[20%] sm:pt-20'>
                <GptSearchBar />
                <GptMovieSuggestions />
            </div>
        </>

    )
}

export default GptSearch