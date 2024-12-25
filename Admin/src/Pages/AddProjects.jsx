import React, { useContext, useState } from 'react'
import { ProjectContext } from '../Context/ProjectsContext'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'


const AddProjects = () => {
    const navigate = useNavigate()
    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [link1, setLink1] = useState()
    const [link2, setLink2] = useState()
    const [file, setFile] = useState()


    const {AddProjects} = useContext(ProjectContext)

    const HandleSubmit = (e) =>{
        e.preventDefault()
        const formdata = new FormData()
        formdata.append('title',title)
        formdata.append('description',description)
        formdata.append('link1',link1)
        formdata.append('link2',link2)
        formdata.append('file',file)
        console.log(file);


        AddProjects(formdata)
       
        

        
    }

  return (
    <div className='h-screen flex items-center justify-center'>
        <form onSubmit={HandleSubmit} className='flex flex-col w-1/2 border-2 p-2 rounded-sm shadow-lg'>
        <h1 className='text-center text-3xl font-bold my-3'>Add New Projects</h1>
            <label className='text-sm text-gray-500' htmlFor="">Title</label>
            <input className='border rounded-md p-2 outline-none focus:bg-slate-200 text-gray-700' type="text" onChange={(e)=>setTitle(e.target.value)}/>
            <label className='text-sm text-gray-500' htmlFor="">Description</label>
            <textarea name="" id="" className='h-48 border rounded-md p-2 outline-none focus:bg-slate-200 text-gray-700' onChange={(e)=>setDescription(e.target.value)}></textarea>
            <label className='text-sm text-gray-500' htmlFor="">Link1</label>
            <input className='border rounded-md p-2 outline-none focus:bg-slate-200 text-gray-700' type="text" onChange={(e)=>setLink1(e.target.value)}/>
            <label className='text-sm text-gray-500' htmlFor="">Link2</label>
            <input className='border rounded-md p-2 outline-none focus:bg-slate-200 text-gray-700' type="text" onChange={(e)=>setLink2(e.target.value)}/>
            <label htmlFor="">Select Image</label>
            <input type="file" name="" id="" onChange={(e)=>setFile(e.target.files[0])}/>
            <div className='mt-3 flex items-center justify-center'>
                <button className='px-5 py-2 bg-black text-white rounded-full'>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default AddProjects