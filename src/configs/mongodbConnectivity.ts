import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config();


const mongoDB = async () => {
    try {
        await mongoose.connect(process.env.mongoDB_URI!);
        console.log('mongoDB connected successfully');
    } catch (error) {
        console.log(error)
    }
}

export default mongoDB;