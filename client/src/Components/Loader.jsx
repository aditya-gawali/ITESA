import React, { useEffect, useState } from 'react';
import gsap from 'gsap';

function Loader() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeline = gsap.timeline();

        // Animate text
        timeline.to('.loader-text', {
            duration: 2,
            text: "ITESA CLUB", // Your club's name
            ease: 'power1.inOut',
            repeat: -1,
            yoyo: true,
            repeatDelay: 0.5,
        });

        // Simulate loading completion after 3 seconds
        setTimeout(() => {
            setLoading(false);
            gsap.to('.loader', { backgroundColor: '#000', duration: 1 }); // Change loader background color
        }, 3000);

        return () => timeline.kill();
    }, []);

    if (!loading) return null; // Hide the loader when loading is complete

    return (
        <div className="loader" style={loaderStyles}>
            <h1 className="loader-text" style={textStyles}>ITESA</h1>
        </div>
    );
}

const loaderStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
};

const textStyles = {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#333',
};

export default Loader;
