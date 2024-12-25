import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
        title:String,
        description:String,
        link1:String,
        link2:String,
        image:String,
})

const ProjectModel = mongoose.models.projects || mongoose.model('projects',UserSchema)

export default ProjectModel