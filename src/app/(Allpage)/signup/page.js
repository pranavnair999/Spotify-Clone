"use client"

import React,{useEffect, useRef} from 'react'
import Image from 'next/image'
import {useRouter} from "next/navigation"
import spotify from "../../../../public/spotifylogo.png"
import gsap from "gsap"
import { useSession } from 'next-auth/react'
import google from "../../../../public/google.png"
import github from "../../../../public/github.png"
import { signIn } from 'next-auth/react'

export default function Signup(){
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("/");
    }
  }, [session, router]);
 
  const [email,setEmail]=React.useState("");
  
  const [name,setName]=React.useState("");
  
  const [password,setPassword]=React.useState("")

  const [error,setError]=React.useState("");

const ref=useRef()
   

useEffect(()=>{
gsap.fromTo(ref.current.children,{y:0,opacity:0},{y:10,opacity:10,stagger:1})
},[])

const signup= async ()=>{

  const res1=await fetch("/api/UserExist",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({email})
  })
  const {user}=await res1.json()

  if(user){
    setError("User exist")
    console.log(user)
    return;
  }

const res=await fetch("/api/signup",{
  method:"POST",
  headers:{
    "Content-Type":"application/json"
  },
  body:JSON.stringify({name,email,password}),
})

if(res.ok){
  router.push("/")
}


}
    
 return(
  <div   style={{backgroundColor:"#333333",width:"100%",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}} >
  <div  ref={ref} style={{width:500,height:700,color:"white",backgroundColor:"black",borderRadius:10,gap:0,boxShadow:"1px 1px black",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",borderTop:"5px solid #3f3"}}>
  <Image 
  src={spotify}
  width={140} height={40} 
  alt="spotifylogo"
  />
  <h1 style={{color:"#2f2"}}>Signup to Spotify</h1>
  <div style={{width:"60%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:15}}>
  <div style={{width:"100%",height:"fit",position:"relative"}}>
   <Image src={google} width={20} height={20} style={{position:"absolute",bottom:8,left:50}} alt="google"/>
   <button onClick={()=>signIn("google",{redirect:false,callbackUrl:"/"})} style={{border:"none",width:"100%",backgroundColor:"white",borderRadius:10,color:"black",textAlign:"center",fontSize:20,padding:5}}  >Google</button>
  </div>
  <div style={{width:"100%",height:"fit",position:"relative"}}>
   <Image src={github} width={20} height={20} style={{position:"absolute",bottom:8,left:50}} alt="github"/>
   <button onClick={()=>signIn("github",{redirect:false,callbackUrl:"/"})} style={{border:"none",width:"100%",backgroundColor:"white",borderRadius:10,color:"black",textAlign:"center",fontSize:20,padding:5}}>Github</button>
  </div>

  <div  style={{display:"flex",flexDirection:"column",gap:15,justifyContent:"center",width:"100%",height:"100%"}}>
  <label style={{fontSize:30,alignSelf:"flex-start"}}>User Name</label>
  <input 
  type="text" value={name} 
  onChange={(e)=>setName(e.target.value) }  
  placeholder="Enter Email"
  style={{padding:10,borderBlockColor:"green",border:"none",boxShadow:"0.3px 0.3px black",borderRadius:5}}
  />
  </div>
  <div  style={{display:"flex",flexDirection:"column",gap:15,justifyContent:"center",width:"100%",height:"100%"}}>
  <label style={{fontSize:30,alignSelf:"flex-start"}}>Email</label>
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
  placeholder="Enter Email"
  style={{padding:10,borderBlockColor:"green",border:"none",boxShadow:"0.3px 0.3px black",borderRadius:5}}
  />
  </div>
  <br />
  <button style={{color:"white",backgroundColor:"blue",border:"none",borderRadius:5,padding:"15px 37px 15px 37px",fontSize:20,alignSelf:"center"}} onClick={signup}>Signup</button>
    <p>Already had account ? <span style={{color:"blue"}} onClick={()=>router.push("/signin")}>Click here</span></p>
  <h4 style={{color:"red"}}>{error}</h4>
  </div>
 </div>
  </div>
   );
   }


    
    
    
