import React from 'react'
import { RiArrowRightLine, RiArrowRightUpLine, RiArrowUpLine, RiInstagramLine, RiLinkedinBoxLine, RiLinkedinLine, RiMacbookLine, RiTwitterLine, RiYoutubeLine } from '@remixicon/react'

const Footer = () => {
    return (
        <div className='w-full min-h-[70vh] mt-10 bg-black text-white font-[aeonik] relative    '>

            <div className='p-6'>
                <h1 className='text-3xl  flex items-center gap-3'><RiMacbookLine className='font-bold size-8' />ITESA</h1>
            </div>

            <div className='flex flex-row justify-between w-full mt-10 px-5'>
                <div className='px-4 flex flex-col gap-4 text-sm w-full'>
                    <h1 className='text-xl'>Connect with us</h1>
                    <h1 className='flex items-center justify-start gap-2'> <RiInstagramLine /> Instagram</h1>
                    <h1 className='flex items-center justify-start gap-2'> <RiLinkedinBoxLine /> LinkedIn</h1>
                    <h1 className='flex items-center justify-start gap-2'> <RiTwitterLine /> X</h1>
                    <h1 className='flex items-center justify-start gap-2'> <RiYoutubeLine /> Youtube</h1>

                </div>

                <div className='px-4 flex flex-col gap-4 text-sm w-full'>
                    <h1 className='text-xl'>Events</h1>
                    <h1 className='flex items-center justify-start gap-2'> <RiArrowRightUpLine /> Event 1</h1>
                    <h1 className='flex items-center justify-start gap-2'> <RiArrowRightUpLine /> Event 2</h1>
                    <h1 className='flex items-center justify-start gap-2'> <RiArrowRightUpLine /> Event 3</h1>
                    <h1 className='flex items-center justify-start gap-2'> <RiArrowRightUpLine /> Event 4</h1>

                </div>

                <div className='px-4 flex flex-col gap-4 text-sm w-full'>
                    <h1 className='text-xl'>Join us</h1>
                    <div className="w-full flex items-center justify-start gap-4">
                        <input type="text" className='w-3/4 h-10 rounded-sm px-2 p-4 text-lg text-black ring-0 focus:ring-0 outline-0 focus:outline-offset-1 focus:outline-0 focus:shadow-xl' placeholder='Your Email ' />
                        <RiArrowRightLine className='hover:bg-white hover:text-black rounded-full size-7' />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer
