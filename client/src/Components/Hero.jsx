import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
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
        <div ref={heroRef}  className='w-full max-h-[80vh] pt-10 '>
            <h1  className='title font-[futura] text-[15.5vw] leading-[14vw] tracking-[-8px] uppercase  p-4 '>Change <br /></h1>
            <h1  className='title font-[futura] text-[15vw] leading-[14vw] tracking-[-8px] uppercase  p-4 '>the course <br /></h1>
        </div>

        
    )
}

export default Hero
