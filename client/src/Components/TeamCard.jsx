import React from 'react'

const TeamCard = ({ image }) => {
    return (

        <img src={`/team/${image}.jpg`} alt="Image 1" className="w-[60vw] md:w-[20vw] h-[40vh] md:h-[50vh] object-cover overflow-hidden rounded-lg" />
    )
}

export default TeamCard
