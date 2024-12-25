import express from 'express'
import { AddProjects, GetProjects, updateProject } from '../controllers/ProjectController.js'
import upload from '../middleware/Multer.js'



const ProjectRouter = express.Router()

ProjectRouter.post('/addProjects',upload.single('file'),AddProjects)
ProjectRouter.get('/get/projects',GetProjects)
ProjectRouter.put('/update/project/:id',updateProject)


export default ProjectRouter