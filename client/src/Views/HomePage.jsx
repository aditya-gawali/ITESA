import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Video from '../Components/Video'
import Events from '../Components/Events'
import Loader from '../Components/Loader'
import Footer from '../Components/Footer'

const HomePage = () => {
  return (
    <div className=''>
      {/* <Loader/> */}
      <Navbar/>
      <Hero/>
      <Video/>
      <Events/>
      <Footer/>
    </div>
  )
}

export default HomePage
