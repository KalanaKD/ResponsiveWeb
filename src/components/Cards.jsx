import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

function Cards() {
  return (
    <div className='w-full py-[10rem] px-4 bg-white' >
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className="w-full shadow-xl shadow-gray-300 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300" >
                <img src={Single} alt="/" className="w-20 mx-auto mt-[-3rem] bg-white " />
                <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                <p className='text-center text-4xl font-bold '>$149</p>
                <div className="text-center font-medium">
                    <p className='py-2 border-b mx-8 mt-8'>500GB Storage</p>
                    <p className='py-2 border-b mx-8'>1 Granted User</p>
                    <p className='py-2 border-b mx-8'>Send up to 2GB</p>
                </div>
                <button  className='bg-[#00df9a] rounded-md w-[200px] font-medium font-semibold text-black my-6 mx-auto py-3 '>Start Trial</button>
            </div>
            <div className="w-full shadow-xl shadow-gray-300 flex flex-col p-4 md:my-0 rounded-lg hover:scale-105 duration-300" >
                <img src={Double} alt="/" className="w-20 mx-auto mt-[-3rem] bg-white " />
                <h2 className='text-2xl font-bold text-center py-8'>Double User</h2>
                <p className='text-center text-4xl font-bold '>$149</p>
                <div className="text-center font-medium">
                    <p className='py-2 border-b mx-8 mt-8'>500GB Storage</p>
                    <p className='py-2 border-b mx-8'>1 Granted User</p>
                    <p className='py-2 border-b mx-8'>Send up to 2GB</p>
                </div>
                <button  className='bg-[#000000] rounded-md w-[200px] font-medium font-semibold text-[#00df9a] my-6 mx-auto py-3 '>Start Trial</button>
            </div>
            <div className="w-full shadow-xl shadow-gray-300 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300" >
                <img src={Triple} alt="/" className="w-20 mx-auto mt-[-3rem] bg-white " />
                <h2 className='text-2xl font-bold text-center py-8'>Triple User</h2>
                <p className='text-center text-4xl font-bold '>$149</p>
                <div className="text-center font-medium">
                    <p className='py-2 border-b mx-8 mt-8'>500GB Storage</p>
                    <p className='py-2 border-b mx-8'>1 Granted User</p>
                    <p className='py-2 border-b mx-8'>Send up to 2GB</p>
                </div>
                <button  className='bg-[#00df9a] rounded-md w-[200px] font-medium font-semibold text-black my-6 mx-auto py-3 '>Start Trial</button>
            </div>
        </div>
    </div>
  )
}

export default Cards