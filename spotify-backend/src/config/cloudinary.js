import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';

// .env dosyasındaki değişkenleri process.env'ye yükler
dotenv.config();

const connectCloudinary = () => {
    console.log('Cloudinary Name:', process.env.CLOUDINARY_NAME);
    console.log('Cloudinary API Key:', process.env.CLOUDINARY_API_KEY);
    console.log('Cloudinary Secret Key:', process.env.CLOUDINARY_SECRET_KEY);

    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_SECRET_KEY,
    });

    console.log('Cloudinary configured successfully.');
}

export default connectCloudinary;
