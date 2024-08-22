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
        <div className='w-full h-[100vh] p-4 px-10 pt-10'>
            <h1 className='text-ms font-[aeonik] font-thin border-b border-b-black'>
                Events
            </h1>

            <div className='flex items-center justify-between pt-5 h-full gap-6'>
                <div className='w-full h-full'>
                    <img
                       
                        src="https://cdn.sanity.io/images/w8f1ak3c/production/9032e317a6741221ae543fdae5d05160819f9a44-1500x2250.jpg/DSC0079_Dexter%20Kim.jpg?rect=0,0,1500,2008&fp-x=0.47794117647058826&fp-y=0.4461323529411765&w=420&h=700&fit=crop&crop=focalpoint&auto=format"
                        alt=""
                        className='h-full w-full object-cover'
                    />
                </div>
                <div className='w-full h-full'><img src="https://cdn.sanity.io/images/w8f1ak3c/production/138e191deead80c5c8e9a982c20987f8f83c1f27-5504x8256.jpg/JTG_2919%20copy.jpg?rect=275,0,4954,8256&w=420&h=700&fit=min&auto=format" alt="" className='h-full w-full object-cover' /></div>
                <div className='w-full h-full'><img src="https://cdn.sanity.io/images/w8f1ak3c/production/d3151106849ff2494d66916cf554c68a0603444d-902x1500.png/Rectangle%20220.png?rect=1,0,900,1500&w=420&h=700&fit=min&auto=format" alt="" className='h-full w-full object-cover' /></div>
            </div>
        </div>
    )
}

export default Events
