import ExperienceModel from "../models/Experience.js";

const AddExp = async(req,res)=>{
    const {company,role,description} = req.body;
    await ExperienceModel.create({company:company, role:role, des:description})
    res.json({success:true, message:"eXP added"})
}


const GetExp = async(req,res)=>{
    const data = await ExperienceModel.find({})
    res.json({data:data})
}



export {AddExp, GetExp}