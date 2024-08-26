import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Video from '../Components/Video'
import Events from '../Components/Events'
import Footer from '../Components/Footer'
import Teams from '../Components/Teams'

const HomePage = () => {
  return (
    <div className=''>
      <Navbar />
      <Hero />
      <Video />
      <Events />
      <Teams />
      <Footer />
      
    </div>
  )
}

export default HomePage
