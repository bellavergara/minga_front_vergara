import React, { useState, useEffect } from 'react'

const Hero = () => {

    // este estado tiene como valor inicial el ancho del window cuando se monte el componente//
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => { // este es el efecto que  emula el ciclo de vida //
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize); // con . remove,removemos el evento//
        };
    }, []);

    const containerStyle = {
        backgroundImage: windowWidth > 768 ? "url('./image/home.svg') " : "none",

    };

    return (

        <div className='h-3/6 mb-20 px-1 bg-center bg-no-repeat bg-cover md:p-2  md: py-2 rounded md: w-9/12 md:h-2/5 m-20' style={containerStyle}>
            <h1 className='text-6xl xl:text-6xl lg:text-3xl p-1 text-white font-semibold mt-20 '>Live the emotion of the manga</h1>
            <p className=' text-white'>#Mingaforever 🔥</p>
            <h4 className='text-2xl p-1 text-white'>Find the perfect manga for you</h4>
            <button className='rounded-full font-bold p-4 w-60 text-white bg-[#F9A8D4]'>{windowWidth < 768 ? "Explore" : "Sign In!"}</button>
        </div>

    )
}

export default Hero