import {v2 as cloudinary} from 'cloudinary'


const connectCloudinary = async()=>{

    cloudinary.config({
        cloud_name:process.env.CLOUD_NAME,
        api_key:process.env.CLOUD_API,
        api_secret:process.env.CLOUD_SECRETE,
    })


}


export default connectCloudinary