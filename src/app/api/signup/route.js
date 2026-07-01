import connectDB from "../../../../Mongodb/mongodbConnect"
import User from "../../../../Mongodb/UserSchema"
import bcrypt from "bcrypt"

export async function POST(req,res){
try{
await connectDB()
const {name,email,password}=await  req.json()
console.log(name,email,password)
const hashPassword=await bcrypt.hash(password,10)

const user= await User.create({name,email,password:hashPassword})
if(user){
   return new Response(JSON.stringify({user:true}),{
    status:200,
    headers:{
        "Content-Type":"application/json"
    }
   })
}
return new Response(JSON.stringify({user:false}),{
    status:200,
    headers:{
        "Content-Type":"application/json"
    }
   })
}
catch(err){
    return new Response(JSON.stringify({user:false}),{
        status:200,
        headers:{
            "Content-Type":"application/json"
        }
       })
}

}