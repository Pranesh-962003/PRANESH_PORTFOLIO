import React from 'react'
import Skills from './Skills'
import Projects from './Projects'
import Experience from './Experience'

const Contents = () => {
  return (
    <div className=' flex flex-col h-full w-full md:overflow-y-scroll [&::-webkit-scrollbar]:hidden [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-200 scroll-smooth'>
        <h1 id='me' className='text-4xl font-semibold mt-10'>MERN developer with hands on Experience
            <br />
            on Frontend and Backend
        </h1>
        <div className='mt-10 ml-4 flex gap-10'>
            <a href='https://www.linkedin.com/in/pranesh-s-cse/' target='_blank' className='px-6 py-3 rounded-full bg-black text-white hover:scale-[1.05] duration-500 transition-all'>Talk with me</a>
            <a href='https://github.com/Pranesh-962003' target='_blank' className='px-6 py-3 border border-gray-600 rounded-full hover:scale-[1.05] duration-500 transition-all'>See my Work</a>
        </div>
        <hr id='skills' className='mt-16 border-gray-300'/>
        <div>
            <Skills />
            <hr id='projects' className='mt-16 border-gray-300'/>
            <Projects/>
            <hr id='experience' className='mt-16 border-gray-300'/>
            <Experience/>
        </div>
    </div>
  )
}

export default Contents