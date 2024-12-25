import React, { useEffect } from 'react'
import axios from 'axios'
import { useContext } from 'react'
import { ProjectContext } from '../Context/ProjectsContext'
import { Link } from 'react-router-dom'

const Home = () => {

    //api to fetch data
    const {currency, backend, GetProjects, projectData} = useContext(ProjectContext)


    useEffect(()=>{
        GetProjects()
    },[])

  return (
    <div className='mx-10 h-screen'>
        <div className='  flex flex-col items-center justify-center'>
        <div className='my-5 flex items-start justify-start w-3/4'>
        <Link to={`/addprojects`} className='px-6 py-3 bg-slate-600 text-white text-sm rounded-full shadow-md hover:scale-[1.05] duration-300 transition-all'>Add projects</Link>
        </div>

            <table className='w-3/4 shadow-md'>
                <thead>
                    <tr>
                        <td className='p-2 border text-center'>title</td>
                        <td className='p-2 border text-center'>description</td>
                        <td className='p-2 border text-center'>link1</td>
                        <td className='p-2 border text-center'>link2</td>
                        <td className='p-2 border text-center'>action</td>
                    </tr>
                </thead>
                {
                    projectData[0]?
                    <tbody>
                    {
                        projectData.map((items,index)=>(
                            <tr key={index}>
                                <td className='p-2 border text-center'>{items.title}</td>
                                <td className='w-1/2 border'>{items.description}</td>
                                <td className='p-2 border text-center'>{items.link1}</td>
                                <td className='p-2 border text-center'>{items.link2}</td>
                                <td className='p-2 border gap-2'>
                                    <Link className='px-6 py-2 text-white bg-indigo-500 rounded-full shadow-md'>Update</Link>
                                    <Link className='px-6 py-2 text-white bg-red-600 rounded-full shadow-md'>Delete</Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
                :
                    <tbody>
                        <tr>
                            <td colSpan={5}><p className='text-center w-full'>No data</p></td>
                        </tr>
                    </tbody>
                }
            </table>




        </div>
        <div className='  flex flex-col items-center justify-center'>
            <div className='my-5 flex items-start justify-start w-3/4'>
            <Link to={`/addExp`} className='px-6 py-3 bg-slate-600 text-white text-sm rounded-full shadow-md hover:scale-[1.05] duration-300 transition-all'>Add experience</Link>
            </div>
        </div>
    </div>
  )
}

export default Home