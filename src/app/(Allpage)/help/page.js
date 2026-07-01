"use client"

import React from 'react'
import Navbar from "../../../../Component/Navbar";
import { FaArrowLeft } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
export default function Help() {
  const router=useRouter()
  return (
    <div style={{width:"100%",height:"100%",display:"flex",flexDirection:"column",gap:20}}>
      <Navbar/>
      <FaArrowLeft size="2em"  style={{color:"black"}} onClick={()=>router.back()}/>
      <h1>HELP</h1>
      <p>Play music Without any error,If you face any issue contact me surajchauhan442917@gmail.com</p>
     </div>
  )
}

