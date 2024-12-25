import axios from 'axios'
import React, { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export const ProjectContext = createContext()


const ProjectsContext = (props) => {
  



    const currency = "$"
    const backend = import.meta.env.VITE_BACKEND_URL
    
    



    const [projectData, setProjects] = useState([])

   


    //gunctions

    const GetProjects = async()=>{
        try {

           const {data} = await axios.get(backend+'/get/projects')
           setProjects(data.data)            
        } catch (error) {
            
        }
    }



    //add projects
    const AddProjects = async(formdata) =>{
       const {data} =  await axios.post(backend+'/addProjects',formdata)
        if(data.success){
          toast.success(data.message);
       
          
          
        }
        
    }


    const value = {
        currency,
        backend,
        GetProjects,
        projectData,AddProjects
    }











  return (
    <ProjectContext.Provider value={value}>
        {props.children}
    </ProjectContext.Provider>
  )
}

export default ProjectsContext