import mongoose from "mongoose";

mongoose.connect("mongodb://rishabh:password01@127.0.0.1:27017/mydb?authSource=admin")
.then(()=>{
    console.log("MongoDB connected successfully")
})
.catch((err)=>{
    console.log("MongoDB connection failed", err.message)
})