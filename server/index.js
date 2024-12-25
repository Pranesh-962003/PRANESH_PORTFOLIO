import express from "express";
import cors from 'cors'
import 'dotenv/config'
import connectDB from "./Config/Mongodb.js";
import connectCloudinary from "./Config/Cloudinary.js";
// import ProjectModel from "./models/User.js";
// import ExperienceModel from "./models/Experience.js";
import ProjectRouter from "./routes/ProjectsRoutes.js";
import ExpRouter from "./routes/Experience.rout.js";


//api config--



const app = express()
app.use(express.json())
app.use(cors())
connectDB()
connectCloudinary();




//api test

app.use('/api/Projects',ProjectRouter)
app.use('/api/experience',ExpRouter)


app.get('/',(req,res)=>{
    res.send('Hello')
})



const port = process.env.PORT

// listenting
app.listen(port, ()=>{
    console.log(`${port} is running`);
    
})