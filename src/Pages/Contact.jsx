import React from 'react'

function Contact() {
  return (
    <>
    <div className='flex justify-center items-center p-39 '>
      <div className='w-185 h-160  shadow-[0px_0px_4px_gray] p-2 '>
        <h1 className='text-center text-4xl font-bold '>Contact Us</h1>
        <div className='flex flex-col p-3 '>
          <label >Name <span className='text-red-600'>*</span></label>
          <input className='border border-gray-300 p-4' type="text" placeholder='Enter your name' />
        </div>
        <div className='flex flex-col p-3 '>
          <label >Phone <span className='text-red-600'>*</span></label>
          <input className='border border-gray-300 p-4' type="text" placeholder='Enter your phone number' />
        </div>
        <div className='flex flex-col p-3 '>
          <label >Message <span className='text-red-600'>*</span></label>
          <textarea className='border border-gray-300 p-4 h-50' type="text" placeholder='Type message here....' />
        </div>


        <div className='flex justify-end p-2'>
          <button className='bg-black text-white px-5 py-2 rounded hover:bg-gray-900 hover:cursor-pointer hover:transition-0.5s '>Submit</button>
        </div>
      </div>  
    </div>
    
    
    
    </>
  )
}

export default Contact