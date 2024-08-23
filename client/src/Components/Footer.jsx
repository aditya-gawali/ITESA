import React from 'react'
import { RiArrowRightLine, RiArrowRightUpLine, RiArrowUpLine, RiDiscordFill, RiInstagramFill, RiInstagramLine, RiLinkedinBoxFill, RiLinkedinBoxLine, RiLinkedinLine, RiMacbookLine, RiTwitterLine, RiTwitterXFill, RiYoutubeFill, RiYoutubeLine } from '@remixicon/react'

const Footer = () => {
    return (
        <>
            <div className='text-white font-[neue] relative my-10 border-t border-gray-600 mx-4 md:mx-14 '>

                <div className='flex flex-col md:flex-row justify-between w-full my-5 md:my-10 md:px-5 gap-6'>
                    <div className='px-4 flex flex-col gap-4 text-sm w-full'>
                        <img src="/images/itesa without backgroung png.png" alt="" className='w-[20vh]' />
                        <h1 className='text-lg'>Connect with us</h1>
                        <div className="flex gap-6">
                            <h1 className='flex items-center justify-start gap-2'> <RiInstagramFill /></h1>
                            <h1 className='flex items-center justify-start gap-2'> <RiLinkedinBoxFill /></h1>
                            <h1 className='flex items-center justify-start gap-2'> <RiDiscordFill /></h1>
                            <h1 className='flex items-center justify-start gap-2'> <RiYoutubeFill /></h1>
                            <h1 className='flex items-center justify-start gap-2'> <RiTwitterXFill /> </h1>
                        </div>

                    </div>


                    <div className='px-4 flex flex-col gap-4 text-sm w-full'>
                        <h1 className='text-xl'>News Letter</h1>
                        <div className="w-full flex items-center justify-start gap-4">
                            <input type="text" className='w-3/4 h-10 rounded-sm px-2 p-4 text-lg text-black ring-0 focus:ring-0 outline-0 focus:outline-offset-1 focus:outline-0 focus:shadow-xl' placeholder='Your Email ' />
                            <button className='bg-[#27E0B3] py-2 rounded-sm px-5 text-black text-xl font-[aeonik]'>Subscribe </button>

                        </div>

                    </div>
                </div>
            </div>

        </>

    )
}

export default Footer
