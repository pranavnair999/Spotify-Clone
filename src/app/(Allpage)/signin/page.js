"use client"

import React,{useEffect, useRef} from 'react'
import Image from 'next/image'
import {redirect, useRouter} from "next/navigation"
import spotify from "../../../../public/spotifylogo.png"
import google from "../../../../public/google.png"
import github from "../../../../public/github.png"
import gsap from "gsap"
import { signIn } from 'next-auth/react'
import { useSession } from 'next-auth/react'

export default function Login(){
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("/");
    }
  }, [session, router]);
 
  const [email,setEmail]=React.useState("");
  const [error,setError]=React.useState("");
  
  const [password,setPassword]=React.useState("")
  
const ref=useRef()
   

useEffect(()=>{
gsap.fromTo(ref.current.children,{y:0,opacity:0},{y:10,opacity:10,stagger:1})
},[])

const signin= async ()=>{
  alert(email+password)
 try{
const store=await signIn("credentials",{
  email,
  password,
  redirect:false
})

if(store.error){
  setError("Invalid Credentials")
  return
}
router.replace("/")
 }
 catch(err){
console.log(err)
setError("Something went wrong")
 }
}
    
 return(
   <div   style={{backgroundColor:"#333333",width:"100%",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}} >
   <div  ref={ref} style={{width:500,height:650,color:"white",backgroundColor:"black",borderRadius:10,gap:0,boxShadow:"1px 1px black",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",borderTop:"5px solid #3f3"}}>
   <Image 
   src={spotify}
   width={140} height={40} 
   alt="spotifylogo"
   />
   <h1 style={{color:"#2f2"}}>Login to Spotify</h1>
   <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:15}}>
   <div style={{width:"100%",height:"fit",position:"relative"}}>
    <Image src={google} width={20} height={20} style={{position:"absolute",bottom:8,left:50}} alt="google"/>
   <button onClick={()=>signIn("google",{redirect:false,callbackUrl:"/"})} style={{border:"none",width:"100%",backgroundColor:"white",borderRadius:10,color:"black",textAlign:"center",fontSize:20,padding:5}}>Google</button>
   </div>
   <div style={{width:"100%",height:"fit",position:"relative"}}>
    <Image src={github} width={20} height={20} style={{position:"absolute",bottom:8,left:50}} alt="github"/>
    <button onClick={()=>signIn("github",{redirect:false,callbackUrl:"/"})} style={{border:"none",width:"100%",backgroundColor:"white",borderRadius:10,color:"black",textAlign:"center",fontSize:20,padding:5}}>Github</button>
   </div>

   <div  style={{display:"flex",flexDirection:"column",gap:15,justifyContent:"center"}}>
   <label style={{fontSize:30,alignSelf:"flex-start"}}>Email or Username</label>
   <input 
   type="text" value={email} 
   onChange={(e)=>setEmail(e.target.value) }  
   placeholder="Enter Email"
   style={{padding:10,borderBlockColor:"green",border:"none",boxShadow:"0.3px 0.3px black",borderRadius:5}}
   />
</div>
   <div  style={{display:"flex",flexDirection:"column",gap:15,justifyContent:"center",width:"100%",height:"100%"}}>
   <label style={{fontSize:30,alignSelf:"flex-start"}}>Password</label>
   <input 
   type="text" value={password} 
   onChange={(e)=>setPassword(e.target.value) }  
   placeholder="Enter Password"
   style={{padding:10,borderBlockColor:"green",border:"none",boxShadow:"0.3px 0.3px black",borderRadius:5}}
   />
   </div>
   <br />
   <button style={{color:"white",backgroundColor:"blue",border:"none",borderRadius:5,padding:"15px 37px 15px 37px",fontSize:20,alignSelf:"center"}} onClick={signin}>Login</button>
 <p>Do not have account ? <span style={{color:"blue"}} onClick={()=>router.push("/signup")}>Click here</span></p>
     <h4 style={{color:"red"}}>{error}</h4>
   </div>
  </div>
   </div>
   );
   }


    
    
    
