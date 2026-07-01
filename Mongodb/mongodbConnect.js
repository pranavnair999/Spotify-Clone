import mongoose from "mongoose"
export default  async function connectDB(){
    try{
      await mongoose.connect(process.env.CONNECT_DB,{useNewUrlParser: true,
          useUnifiedTopology: true})
    
         console.log("Connect to DB")
      }
      catch(err){
  
          console.log("Error to connect DB")
      }
     
  
  }
  