import React from 'react'

function Newsletter() {
  return (
    <div className='w-full py-16 text-white px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2'>
                <h1 className='md:text-4xl sm:text-3xl text-xl font-bold'>Want tips & tricks to optimize your flow?</h1>
                <p>Sign up for our newsletter to stay updated!</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <input className='p-3 flex w-full rounded-md text-black m-1' type="email" placeholder='Enter your email' name="email" id="email" />
                    <button className='bg-[#00df9a] rounded-md w-[200px] font-medium font-semibold text-black my-6 mx-auto py-3 '>Subscribe</button>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Newsletter