import ProjectModel from "../models/User.js";
import { v2 as cloudinary } from "cloudinary";


const AddProjects = async(req,res) =>{
    
    try{
        const {title, description, link1, link2} = req.body
        console.log(title, description, link1, link2);
        const file = req.file
        console.log(file);
        

        const imageUpload = await cloudinary.uploader.upload(file.path, {resource_type:'image'})
        const imgurl = imageUpload.secure_url
        console.log(imgurl);
        


        ProjectModel.create({title:title, description:description, link1:link1, link2:link2, image:imgurl})
       res.json({success:true, message:'Doctor Added'})
        

    }catch(err){
        console.log(err);
        
    }
}

const GetProjects = async(req,res)=>{
  try {
    
    const data = await ProjectModel.find({})
    res.send({sucess:true,data:data})
    
    


  } catch (error) {
    
  }

}


const updateProject = async(req,res)=>{
    try {
        
        const id = req.params.id
         
        console.log(req.body);
        
        



    } catch (error) {
        
    }
}




export {AddProjects, GetProjects, updateProject }