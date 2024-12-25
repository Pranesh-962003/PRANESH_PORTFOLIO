import React from 'react'
import { skills } from '../assets/assets'

const Skills = () => {
  return (
    <div className='w-ful'>
      <h1 className='text-2xl font-semibold my-2 '>Skills</h1>
      <div className='p-4 w-[100%] overflow-x-scroll gap-4 flex items-center scrollbar-none'>
      <div className='flex gap-4'>
      {
        skills.map((items,index)=>(
          <div key={index} className='border h-[100px] w-[100px] p-4 flex flex-col items-center justify-center rounded-lg shadow-md border-gray-300 hover:scale-105 duration-300 transition-all'>
            <img className='h-[40px] w-[30px]'  src={items.image} alt="" />
            <p className='text-sm '>{items.title}</p>
          </div>
        ))
      }
      </div>
      </div>
    </div>
  )
}

export default Skills