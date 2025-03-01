import {} from "dotenv/config.js";
import mongoose from 'mongoose';

const connectToDB =async ()=>{
    console.log(process.env.MONGO_URL);
 await mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.info('connected to Database')
 }).catch((err) =>{
    console.error('Error while connection to Database')
 })
}
export default connectToDB;