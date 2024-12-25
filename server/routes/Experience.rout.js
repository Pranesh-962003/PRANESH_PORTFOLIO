import express from 'express'
import { AddExp, GetExp } from '../controllers/ExpController.js';
import upload from '../middleware/Multer.js';



const ExpRouter = express.Router()

ExpRouter.post('/exp/add',upload.single('file'),AddExp)
ExpRouter.get('/get/exp',GetExp)




export default ExpRouter;