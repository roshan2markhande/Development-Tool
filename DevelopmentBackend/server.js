import {} from "dotenv/config.js";
import express from 'express';
import connectToDB from './database/db.js';
const app=express();


//Database connection
connectToDB();

//Middleware configuration
app.use(express.json());












app.listen(process.env.PORT || 5000,()=>{
    console.info('Server is Started on port no.'+process.env.PORT);
})