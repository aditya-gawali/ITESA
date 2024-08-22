import React, { useRef } from 'react'

// import banner from 'images/itesa-banner.png'

const Video = () => {

    const videoRef = useRef(null);

    const handleMouseEnter = () => {
        videoRef.current.play();
    };

    const handleMouseLeave = () => {
        videoRef.current.pause();
    };

    return (

        <div className='w-full h-[90vh] bg-gray-400 mt-20 overflow-hidden' >
            {/* <img src='/images/itesa-banner.png' className='w-full h-full object-cover' alt="" /> */}
            <video
                muted
                loop
                ref={videoRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                src="https://cms.raxo.co/wp-content/uploads/2023/12/Reel_Web_Rx_23_home_LOOP.mp4" className='w-full h-full object-cover cursor-pointer'></video>
        </div>
    )
}

export default Video
