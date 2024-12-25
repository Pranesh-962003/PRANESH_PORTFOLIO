import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between pt-4 p-2 items-cent'>
        <div className='flex gap-6 items-center'>
            <a className='text-2xl font-semibold' href="#me">Pranesh</a>
            <a href="#skills" className=' md:ml-7 font-medium'>Skills</a>
            <a href="#projects" className='font-medium'>Projects</a>
            <a href="#experience" className='font-medium'>Experience</a>
        </div>
        <a href="https://github.com/Pranesh-962003" target='_blank'>See my Work</a>
    </div>
  )
}

export default Navbar