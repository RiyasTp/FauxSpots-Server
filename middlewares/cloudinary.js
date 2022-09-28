const  cloudinary = require('cloudinary');
<<<<<<< HEAD
require('dotenv').config({ path: '/.env' })
=======
>>>>>>> bb3094e0f18b1206a4c17afc390959e925324ae4


cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });


  const  cloudinaryUploadImg= async (fileTOUpload)=>{
    try {
        const data = await cloudinary.uploader.upload(fileTOUpload, {
            resource_type:"auto",
        });

            return {
                url: data?.secure_url,
            }

    } catch (error) {
        return error;
    }
  };

  module.exports=cloudinaryUploadImg;