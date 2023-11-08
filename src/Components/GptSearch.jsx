import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BG_IMAGE } from '../Utils/constants'

const GptSearch = () => {
    return (
        <div>
            <div className="absolute -z-10 ">
                <img
                    src={BG_IMAGE}
                    alt="logo"
                />
            </div>
            <GptSearchBar />
            <GptMovieSuggestions />
        </div>
    )
}

export default GptSearch