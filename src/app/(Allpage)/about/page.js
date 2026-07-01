"use client"

import React from 'react'
import Navbar from "../../../../Component/Navbar";
import { FaArrowLeft } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
export default function About() {

  const router=useRouter()

  return (
    <div style={{width:"100%",height:"100%",display:"flex",flexDirection:"column",gap:20}}>
      <Navbar/>
      <FaArrowLeft size="2em"  style={{color:"black"}} onClick={()=>router.back()}/>
      <h1>ABOUT US</h1>
      <p>Welcome to about us page of this spotify clone devlop by next.js framework</p>
     </div>
  )
}

