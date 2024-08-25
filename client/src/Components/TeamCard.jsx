import React from 'react'

const TeamCard = ({ image }) => {
    return (



        <div className='relative flex items-center justify-center overflow-hidden'>

            <img src={`/team/${image}.jpg`} alt="Image 1" className="w-[60vw] md:w-[20vw] h-[40vh] md:h-[50vh] object-cover overflow-hidden rounded-lg" />
            <div className='absolute w-full bottom-4 text-center bg-[#0c0c0c] text-white bg-opacity-30 backdrop-blur-sm p-4'>
                <h1 className='text-lg md:text-xl text-white font-[neue] capitalize'>{(image == "Piyush P") ? "Piyush" : image}</h1>
            </div>
        </div>
    )
}

export default TeamCard
