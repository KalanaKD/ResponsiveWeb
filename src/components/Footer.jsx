import React from 'react'
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaTwitterSquare
} from 'react-icons/fa'

function Footer() {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <h1 className='w-full text-[#00df9a] text-3xl font-bold'>REACT.</h1>
        <p className='py-4'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, cumque, voluptatibus, 
          doloribus magnam consequatur nisi asperiores facilis voluptates reprehenderit, incidunt sed.
          Quisquam, voluptatum voluptates, doloribus, asperiores sed incidunt.
        </p>
        <div className='flex justify-between md:w-[75%] my-6'>
          <FaFacebookSquare size={30} className='cursor-pointer hover:text-[#00df9a] mr-4' />
          <FaInstagramSquare size={30} className='cursor-pointer hover:text-[#00df9a] mr-4' />
          <FaTwitterSquare size={30} className='cursor-pointer hover:text-[#00df9a] mr-4' />
          <FaGithubSquare size={30} className='cursor-pointer hover:text-[#00df9a] mr-4' />
          <FaDribbbleSquare size={30} className='cursor-pointer hover:text-[#00df9a]' />
        </div>
      </div>
      <div className="lg:col-span-2 mt-6 flex justify-between ">
        <div>
            <h6 className='font-medium text-gray-400 '>Solutions</h6>
            <ul>
                <li className='py-2 text-sm'>Analytics</li>
                <li className='py-2 text-sm'>Marketing</li>
                <li className='py-2 text-sm'>Commerce</li>
                <li className='py-2 text-sm'>Insights</li>
            </ul>
        </div>
        <div>
            <h6 className='font-medium text-gray-400 '>Support</h6>
            <ul>
                <li className='py-2 text-sm'>Pricing</li>
                <li className='py-2 text-sm'>Documents</li>
                <li className='py-2 text-sm'>Guides</li>
                <li className='py-2 text-sm'>API Status</li>
            </ul>
        </div>
        <div>
            <h6 className='font-medium text-gray-400 '>Solutions</h6>
            <ul>
                <li className='py-2 text-sm'>About</li>
                <li className='py-2 text-sm'>Blog</li>
                <li className='py-2 text-sm'>Jobs</li>
                <li className='py-2 text-sm'>Press</li>
            </ul>
        </div>
        <div>
            <h6 className='font-medium text-gray-400 '>Legal</h6>
            <ul>
                <li className='py-2 text-sm'>Claim</li>
                <li className='py-2 text-sm'>Policy</li>
                <li className='py-2 text-sm'>Terms</li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
