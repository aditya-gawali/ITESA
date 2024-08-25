import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const Events = () => {



    // const imageRef = useRef(null);

    // useEffect(() => {
    //     const img = imageRef.current;

    //     // GSAP animation for hover in
    //     const handleMouseEnter = () => {
    //         gsap.to(img, { scale: 1.2, duration: 0.5, ease: 'power2.out' });
    //     };

    //     // GSAP animation for hover out
    //     const handleMouseLeave = () => {
    //         gsap.to(img, { scale: 1, duration: 0.5, ease: 'power2.out' });
    //     };

    //     img.addEventListener('mouseenter', handleMouseEnter);
    //     img.addEventListener('mouseleave', handleMouseLeave);

    //     // Cleanup event listeners
    //     return () => {
    //         img.removeEventListener('mouseenter', handleMouseEnter);
    //         img.removeEventListener('mouseleave', handleMouseLeave);
    //     };
    // }, []);



    return (
        <div className='h-max mx-4 md:mx-14 my-20'>
            <h1 className='font-[neue] font-thin text-white text-lg md:text-3xl mb-10 leading-10 tracking-wider'>
                Events Organized.
            </h1>

            <div className='flex flex-col md:flex-row items-center justify-between pt-5 h-max md:h-[80vh] gap-6 md:gap-4'>

                <div className='w-full h-[80vh] bg-[#2C2C2C] flex flex-col gap-6 pb-4 text-white rounded-xl '>
                    {/* <img src="https://cdn.sanity.io/images/w8f1ak3c/production/9032e317a6741221ae543fdae5d05160819f9a44-1500x2250.jpg/DSC0079_Dexter%20Kim.jpg?rect=0,0,1500,2008&fp-x=0.47794117647058826&fp-y=0.4461323529411765&w=420&h=700&fit=crop&crop=focalpoint&auto=format"
                        alt=""
                        className='h-full w-full overflow-hidden object-cover rounded-t-xl'
                    /> */}
                    <img src="/images/Poster.png"
                        alt=""
                        className='h-full w-full overflow-hidden object-cover rounded-t-xl'
                    />

                    <h1 className='px-4 text-xl font-[neue]'>SE-TE Interaction and Felicitation.</h1>
                    <button className='mx-4 bg-[#27E0B3] py-2 rounded-lg px-5 text-black text-xl font-[neue]' disabled>Register Now</button>
                </div>

                <div className='w-full'></div>
                <div className='w-full'></div>

                {/* <div className='w-full h-[80vh] bg-[#2C2C2C] flex flex-col gap-6 pb-4 text-white rounded-xl'>
                    <img src="https://cdn.sanity.io/images/w8f1ak3c/production/138e191deead80c5c8e9a982c20987f8f83c1f27-5504x8256.jpg/JTG_2919%20copy.jpg?rect=275,0,4954,8256&w=420&h=700&fit=min&auto=format"
                        alt=""
                        className='h-full w-full overflow-hidden object-cover rounded-t-xl'
                    />

                    <h1 className='px-4 text-xl font-[neue]'>Lorem ipsum, dolor sit amet consectetur adipisicing.</h1>
                    <button className='mx-4 bg-[#27E0B3] py-2 rounded-lg  px-5 text-black text-xl font-[neue]'>Register Now</button>
                </div>

                <div className='w-full h-[80vh] bg-[#2C2C2C] flex flex-col gap-6 pb-4 text-white rounded-xl'>
                    <img src="https://cdn.sanity.io/images/w8f1ak3c/production/d3151106849ff2494d66916cf554c68a0603444d-902x1500.png/Rectangle%20220.png?rect=1,0,900,1500&w=420&h=700&fit=min&auto=format"
                        alt=""
                        className='h-full w-full overflow-hidden object-cover rounded-t-xl'
                    />

                    <h1 className='px-4 text-xl font-[neue]'>Lorem ipsum, dolor sit amet consectetur adipisicing.</h1>
                    <button className='mx-4 bg-[#27E0B3] py-2 rounded-lg px-5 text-black text-xl font-[neue]'>Register Now</button>
                </div> */}

            </div>
        </div>
    )
}


export default Events
