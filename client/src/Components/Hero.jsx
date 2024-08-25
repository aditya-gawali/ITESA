import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Button from './Button';
const Hero = () => {

  const heroRef = useRef(null);

  useEffect(() => {
    const navItems = heroRef.current.querySelectorAll('.title');
    gsap.fromTo(
      navItems,
      { opacity: 1, y: 300 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power2.out' }
    );
  }, []);

  return (
    <div ref={heroRef} className='w-full min-h-[60vh] relative text-white'>

      <div className='absolute z-10 w-full h-[80vh] flex items-center justify-center flex-col gap-10'>
        <h1 className='font-[neue] text-[9vw] md:text-[4.5vw] text-center p-4  leading-[10vw] md:leading-[5vw]'>
          Join the
          <span className=' text-[#27E0B3] text-[8.5vw] md:text-[5vw] font-[neue]'> Future</span>
          <br /> of Coding with
          <span className=' text-[#27E0B3] text-[8vw] md:text-[5vw] font-[neue]'> ITESA.</span>

        </h1>
        <button className='bg-[#27E0B3] py-2 rounded-sm px-5 text-black text-2xl font-[neue] font-bold'>Join Us </button>
      </div>



    </div>


  )
}

export default Hero
