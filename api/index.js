import express from 'express'
import mongoose, { mongo } from 'mongoose'
import dotenv from 'dotenv'

dotenv.config();

mongoose.connect(process.env.MONGO).then(
    ()=>{
        console.log("Mondodb is connected");

    })
    .catch((err)=>{
        console.log(err)
    })

const app=express();

app.listen(3000,()=>{
    console.log("Server is running port 3000");
})