import mongoose from "mongoose";

const ExperienceSchema = new mongoose.Schema({
    company:String,
    role:String,
    des:String,

})


const ExperienceModel =mongoose.models.Experience || mongoose.model('Experience',ExperienceSchema)

export default ExperienceModel