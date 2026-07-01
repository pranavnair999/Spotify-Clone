"use client"

import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { signOut } from 'next-auth/react'
import { FaSearch } from 'react-icons/fa'
import styles from "../src/app/page.module.css"
function Navbar() {

  const router=useRouter()

  async function call(){

  const store=await signOut({redirect:false})
  if(store.url){
    router.replace("/signin")
  }
  }

  return (
   
    <nav style={{display:"flex",justifyContent:"space-between",alignItems:"center",backgroundColor:"gray"}}>
        <h1 style={{color:"#4f4",margin:20}} onClick={()=>router.push("/")}> SPOTIFY</h1>
  
        
        <ul style={{display:"flex",gap:10,listStyle:"none"}}>
            <li><Link href="/about"  style={{textDecoration:"none",color:"yellow"}}>ABOUT</Link></li>
            <li><Link href="/contact" style={{textDecoration:"none",color:"yellow"}}>CONTACT</Link></li>
            <li><Link href="/help" style={{textDecoration:"none",color:"yellow"}}>HELP</Link></li>
        </ul>
        <div   style={{display:"flex",gap:10,listStyle:"none",margin:10,gap:20}}>
        <FaSearch size="2em"  style={{color:"white"}} onClick={()=>router.push("/search")}/>
        <button onClick={call} style={{backgroundColor:"orange",padding:10,borderRadius:10,color:'blue',boxShadow:"1px 1px black",border:"none"}}>SignOut</button>  
        </div>
    </nav>

  )
}

export default Navbar