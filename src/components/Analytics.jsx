import React from 'react'
import laptop from '../assets/laptop.jpg'

function Analytics() {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 '>
            <img className='w-[500px] mx-auto my-4' src={laptop} alt='/' />
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold'>Data Analytics Dashboard</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 '>Manage Data Analytics Centrally</h1>
                <p>
                    lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quasi, cumque, voluptatibus, doloribus magnam
                    consequatur nisi asperiores facilis voluptates
                    reprehenderit, incidunt sed. Quisquam, voluptatum
                    voluptates, doloribus, asperiores sed incidunt
                    consequatur nisi asperiores facilis voluptates
                    reprehenderit, incidunt sed. Quisquam, voluptatum
                    voluptates, doloribus, asperiores sed incidunt
                </p>
                <button className='bg-black text-[#00df9a] rounded-md w-[200px] 
                font-large font-semibold my-6 mx-auto md:mx-0 py-3 '>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Analytics