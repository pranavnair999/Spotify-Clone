import mongoose from "mongoose"

const userSchema=new mongoose.Schema({
    name:{
           type:String,
           required:true,
    },
   email:{
       type:String,
       required:true,
       unique:true,
   },
   password:{
       type:String,
       required:true,
   }
   },{timestamps:true})
   
  const User=mongoose.models.data || mongoose.model(`${process.env.MODEL_NAME}`,userSchema)

   export default User