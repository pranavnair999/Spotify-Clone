"use client"
import {useRouter} from "next/navigation"

import Image from 'next/image'
import error from "../../public/err-logo.png"

export default function Err(){
const router=useRouter()
  return(
    <div style={{width:"100%",height:"100%",backgroundColor:"#444444",display:"flex",alignItems:"center",justifyContent:"center"}}>
    <div  style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:16}} >
    <Image src={error} width={200} heigt={200}  alt="not-found"/>
    <h1 style={{fontSize:50,color:"white"}}>Page Not Found</h1>
    <p style={{color:"white"}}>We can’t seem to find the page you are looking for.</p>
    
    <button onClick={()=>router.push("/")} style={{color:"white",backgroundColor:"blue",border:"none",borderRadius:5,padding:"15px 35px 15px 35px",fontSize:20}}>
    HOME
    </button>

    <button 
    onClick={()=>router.push("/help")} 
    style={{color:"white",backgroundColor:"blue",border:"none",borderRadius:5,padding:"15px 37px 15px 37px",fontSize:20}}
    >
    HELP
    </button>
    </div>
    </div>
    )
}

