import React from 'react'
import { useContext } from 'react';
import { useState } from 'react'
import { ProjectContext } from '../Context/ProjectsContext';
import axios from 'axios'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const Addexp = () => {

    const [comapny, setCompany] = useState();
    const [role,setRole] = useState();
    const [description, setDescription] = useState();

    const navigate = useNavigate()
    
    const backendUrl = import.meta.env.VITE_BACKENDEXP_URL
    
    
    
    const HandleSubmit = async(e)=>{
        e.preventDefault()
        const formdata = new FormData()
        formdata.append('company',comapny)
        formdata.append('role',role)
        formdata.append('description',description)


        const {data} = await axios.post(backendUrl+'/exp/add',formdata)
        if(data.success){
            toast.success(data.message)
            navigate('/')
            
        }
       
    }
    

  return (
    <div className='h-screen flex items-center justify-center'>
        <form onSubmit={HandleSubmit} className='flex flex-col w-1/2 border-2 p-2 rounded-sm shadow-lg'>
        <h1 className='text-center text-3xl font-bold my-3'>Add Experience</h1>
            <label className='text-sm text-gray-500' htmlFor="">Title</label>
            <input className='border rounded-md p-2 outline-none focus:bg-slate-200 text-gray-700' type="text" onChange={(e)=>setCompany(e.target.value)}/>
            <label htmlFor="" className='text-sm text-gray-500'>Role</label>
            <input type="text"  className='border rounded-md p-2 outline-none focus:bg-slate-200 text-gray-700' onChange={(e)=>setRole(e.target.value)}/>
            <label className='text-sm text-gray-500' htmlFor="">Description</label>
            <textarea name="" id="" className='h-48 border rounded-md p-2 outline-none focus:bg-slate-200 text-gray-700' onChange={(e)=>setDescription(e.target.value)}></textarea>


            <div className='mt-3 flex items-center justify-center'>
                <button className='px-5 py-2 bg-black text-white rounded-full'>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default Addexp