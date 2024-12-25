import React from 'react'
import Contents from './Contents'


const Body = () => {
  return (
    <div className='flex md:flex-row flex-col p-2 w-full justify-between md:h-[77%] gap-2'>
       <div className='md:w-[60%] flex flex-col md:items-start items-center md:h-full h-[500px] md:pl-28 justify-center w-full'>
        <div className=' '>
            <img src="/src/assets/WhatsApp Image 2024-12-16 at 13.07.17_1a2abf34.jpg" className='md:h-72 h-60 w-60 rounded-lg' alt="" />
        </div>
        <div className='mt-10'>
            <p className='text-5xl'>Pranesh S</p>
            <p className='mt-3 text-lg leading-6'>MERN Developer
            </p>
        </div>
       </div>
       <div className='w-full overflow-hidden'>
        <Contents/>
       </div>
    </div>
  )
}

export default Body