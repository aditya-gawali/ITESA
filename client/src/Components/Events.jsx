import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import EventCard from './EventCard';

const Events = () => {



    return (
        <div className='h-max mx-4 md:mx-14 my-20'>
            <h1 className='font-[neue] font-thin text-white text-lg md:text-3xl mb-10 leading-10 tracking-wider'>
                Events Organized.
            </h1>

            <div className='my-8 flex flex-col md:flex-row items-center justify-between pt-5 h-max md:h-[80vh] gap-6 md:gap-4'>
                <EventCard image='/images/poster_competition.jpg' eventName='Poster Making Contest.' closed={true} />
                <EventCard image='/images/roadmap.png' eventName='RoadMap Session.' closed={true} />
                <EventCard image='/images/chess.png' eventName='Chess Tournament.' closed={true} />
            </div>

            <div className='flex flex-col md:flex-row items-center justify-between pt-5 h-max md:h-[80vh] gap-6 md:gap-4'>


                <EventCard image='/images/Poster.jpg' eventName='SE-TE Interaction and Felicitation.' closed={true} />
                <EventCard image='/images/hiring.jpg' eventName='We are Recruiting.' closed={true} />

                <div className='w-full'></div>


            </div>
        </div>
    )
}


export default Events
