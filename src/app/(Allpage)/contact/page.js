"use client"

import React from 'react'
import Navbar from "../../../../Component/Navbar";
import { FaArrowLeft } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
function Contact() {
  const router=useRouter()
  return (
    <div style={{width:"100%",height:"100%",display:"flex",flexDirection:"column",gap:20}}>
      <Navbar/>
      <FaArrowLeft size="2em"  style={{color:"black"}} onClick={()=>router.back()}/>
      <h1>CONTACT US</h1>
      <p>If you have any queries regarding this application feel free to contact me at surajchauhan442918@gmail.com</p>
     </div>
  )
}

export default Contact