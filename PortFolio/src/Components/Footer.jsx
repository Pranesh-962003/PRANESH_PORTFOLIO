import React from 'react'

const Footer = () => {


  const currentTime = new Date().toLocaleTimeString();

  
  

  return (
    <div className='h-[100px] my-2'>
        <div className='bg-secondary h-[100%] pb-2 rounded-md flex '>
          <div className='flex items-center justify-center pl-4 w-full'>
            <h1 className='text-white text-xs'>Time is precious: So give it all: {currentTime}</h1>
          </div>
          <div className=' w-full flex items-center justify-center gap-6'>
              <a href="https://www.linkedin.com/in/pranesh-s-cse"><img className='h-7' src="/src/assets/linkedin.svg" alt="" /></a>
              <a href="mailto:pranesh962003.p@gmail.com" target='_blank'><img className='h-7' src="/src/assets/gmail.svg" alt="" /></a>
             
          </div>
        </div>
    </div>
  )
}

export default Footer