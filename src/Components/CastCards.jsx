import React from 'react'
import { PROFILE_PATH } from '../Utils/constants'

const CastCards = ({ cast }) => {
    return (
        cast && (<div className='sm:w-[75%] flex flex-col justify-center m-auto mt-10'>
            <h1 className='text-white font-bold text-4xl pb-10 text-center sm:text-start'>Cast Details</h1>
            <div className='flex flex-wrap gap-5 justify-center sm:justify-start'>
                {
                    cast.slice(0, 15).map((ct) =>
                        ct.profile_path && (
                            <div className='flex flex-col' key={ct.id}>
                                <img className="w-[146px] h-[222px] rounded-lg" alt={ct.name} src={PROFILE_PATH + ct.profile_path} />
                                <p className='text-white pt-2'>{ct.name}</p>
                                <p className='text-white font-light max-w-[100px]'>({ct.character})</p>
                            </div>
                        )

                    )
                }

            </div>
        </div>)



    )
}

export default CastCards