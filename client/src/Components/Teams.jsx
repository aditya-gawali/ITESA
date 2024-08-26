import React from 'react'
import TeamCard from './TeamCard'

const Teams = () => {


    const images = ["dr. preeti patil", "dr. latika desai", "mrs. renuka patil", "mayank", "janhavi", "piyush", "yash", "gayatri", "nikhil", "asmita", "aman", "madhura", "aditya", "prajwal", "Piyush ", "arya", "Achintya", "Abhishek", "abhidnya", "shravani", "parth", "soham", "Shanayu", "sahil", "shreya", "vedant"]

    return (
        <div className="overflow-hidden mx-4 md:mx-14">

            <h1 className='text-ms font-[neue] font-thin text-white text-3xl mb-10 leading-10 tracking-wider'>
                Our Team.
            </h1>

            <div className="flex items-center marquee space-x-8 ">

                {
                    images.map((names, key) => {
                        return <TeamCard image={names} />
                    })
                }



            </div>
        </div>
    )
}

export default Teams
