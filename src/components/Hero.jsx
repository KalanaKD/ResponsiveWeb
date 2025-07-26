import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

function Hero() {
  const typedRef = useRef(null);

  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: ['BTB', 'BTC', 'SaaS'],
        typeSpeed: 120,
        backSpeed: 140,
        loop: true,
      });

      return () => typed.destroy(); // Cleanup
    }
  }, []);

  return (
    <div className='text-white h-screen'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] uppercase'>Growing with data analytics</p>
        <h1 className='font-bold md:text-7xl sm:text-6xl text-4xl md:py-6'>Grow with Data</h1>
        <div className='flex justify-center items-center '>
            <p className='md:text-5xl sm:text-4xl text-xl font-bold '>Fast, Flexible financing for</p>
            <p>
                <span ref={typedRef} className='text-[#00df9a] md:text-5xl sm:text-4xl text-xl mt-2 font-bold pl-2'></span>
            </p>  
        </div>
        <button className='bg-[#00df9a] rounded-md w-[200px] font-large font-semibold text-black my-6 mx-auto py-3 '>Get Started</button>
      </div>
    </div>
  );
}

export default Hero;
