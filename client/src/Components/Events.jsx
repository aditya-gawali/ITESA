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
                <EventCard image='/images/open_mic.jpg' eventName='Open Mic.' closed={false} registerLink='https://forms.gle/jUeT9TNNanPFwkyYA' />
                <EventCard image='/images/future_skills_in_AI.jpg' eventName='Webinar on "Future Skills in AI".' closed={false} registerLink='https://meet.google.com/kyb-tkux-fks' registerText='Join Webinar' />
                <EventCard image='/images/poster_competition.jpg' eventName='Poster Making Contest.' />
            </div>

            <div className='flex flex-col md:flex-row items-center justify-between pt-5 h-max md:h-[80vh] gap-6 md:gap-4'>

                <EventCard image='/images/roadmap.png' eventName='RoadMap Session.' />
                <EventCard image='/images/chess.png' eventName='Chess Tournament.' />

                <EventCard image='/images/Poster.jpg' eventName='SE-TE Interaction and Felicitation.' />


            </div>
            <div className='flex flex-col md:flex-row items-center justify-between pt-5 h-max md:h-[80vh] gap-6 md:gap-4'>


                <EventCard image='/images/hiring.jpg' eventName='We are Recruiting.' />

                <div className='w-full'></div>
                <div className='w-full'></div>

            </div>
        </div>
    )
}


export default Events
