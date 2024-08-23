import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { RiMacbookLine } from '@remixicon/react'
import Button from './Button';
const Navbar = () => {


  const navRef = useRef(null);

  // useEffect(() => {
  //   const navItems = navRef.current.querySelectorAll('.nav-item');
  //   gsap.fromTo(
  //     navItems,
  //     { opacity: 0, y: 50 },
  //     { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: 'power2.out' }
  //   );
  // }, []);


  return (
    <>
      <div ref={navRef} className='w-full overflow-hidden h-[10vh] md:h-[12vh] top-0 font-[neue] flex flex-row justify-between items-center px-4 md:px-10 p-5 bg-[#0c0c0c] text-white bg-opacity-30 backdrop-blur-sm fixed left-0 z-20'>
        <img src="/images/itesa without backgroung png.png" alt="" className='w-[20vh] md:w-[26vh]' />
        <div className='flex flex-row items-center justify-around gap-12 text-md hidden md:flex'>
          <div></div>
          <h1 className="nav-item">Home</h1>
          <h1 className="nav-item">Events</h1>
          <h1 className="nav-item">Team</h1>
          <Button name="Sign In" />
        </div>

      </div>

    </>
  )
}

export default Navbar
