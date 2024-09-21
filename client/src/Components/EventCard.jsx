import React from 'react'

const EventCard = ({ image, eventName, closed = true }) => {
    return (
        <div className='w-full h-[80vh] bg-[#2C2C2C] flex flex-col gap-6 pb-4 text-white rounded-xl '>

            <img src={image}
                alt=""
                className='h-full w-full overflow-hidden object-cover rounded-t-xl'
            />

            <h1 className='px-4 text-xl font-[neue]'>{eventName}</h1>
            {
                !closed ?
                    <button className='mx-4 bg-[#27E0B3] py-2 rounded-lg px-5 text-black text-xl font-[neue]'>Register Now</button>
                    :
                    <button className='mx-4 bg-gray-200  py-2 rounded-lg px-5 text-black text-xl font-[neue]'>Registration Closed</button>
            }

        </div >
    )
}

export default EventCard
