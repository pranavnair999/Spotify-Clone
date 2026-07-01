import User from "../../../../Mongodb/UserSchema";
import connectDB from "../../../../Mongodb/mongodbConnect";

export async function POST(req,res){

    try{
     await connectDB()
     const {email} =await req.json()
    const user=await User.findOne({email}).select("_id")
    console.log(user)
   if(user){
   return new Response(JSON.stringify({user:true}),{
    status:200,
    headers:{
        "Content-Type":"application/json"
    }
   })
   }
   else{
    return new Response(JSON.stringify({user:false}),{
        status:200,
        headers:{
            "Content-Type":"application/json"
        }
       })
   }

    }

catch(error){
return new Response(JSON.stringify({user:null,error:"Internal server error"}),{
status:500,
headers:{
    "Content-Type":"application/json"
}
})}
}