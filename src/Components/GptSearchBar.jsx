import React from 'react'

const GptSearchBar = () => {
    return (
        <div className=''>
            <form className='flex p-[5%] justify-center'>
                <input type='text' className=' w-3/4 p-4 m-4 border-solid 2px black rounded-lg' placeholder='What would you like to watch today?' />
                <button className='m-4 bg-red-800 w-[150px] rounded-lg text-white h-[50px]'>Search</button>
            </form>
        </div>
    )
}

export default GptSearchBar