import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { RiMacbookLine } from '@remixicon/react'
const Navbar = () => {


  const navRef = useRef(null);

  useEffect(() => {
    const navItems = navRef.current.querySelectorAll('.nav-item');
    gsap.fromTo(
      navItems,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: 'power2.out' }
    );
  }, []);


  return (
    <>
      {/*  */}
      <div ref={navRef} className='w-full h-[15vh] border relative top-0 font-["aeonik"] flex flex-row justify-between items-center px-10 p-5 '>
        <h1 className='text-3xl  flex items-center gap-3'><RiMacbookLine className='font-bold size-8' />ITESA</h1>
        <div className='flex flex-row items-center justify-between w-2/4  text-lg'>
          <h1 className="nav-item">About</h1>
          <h1 className="nav-item">Events</h1>
          <h1 className="nav-item">Team</h1>
          <h1 className="nav-item">Contact Us</h1>
        </div>
      </div>

    </>
  )
}

export default Navbar
