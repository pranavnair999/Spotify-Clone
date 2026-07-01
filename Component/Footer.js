import Link from 'next/link'
import React from 'react'
import facebook from "../public/fb.png"
import linkdin from "../public/in.png"
import github from "../public/github.png"
import google from "../public/google.png"
import Image from 'next/image'
function Footer() {
  return (
    <div  style={{display:"flex",flexDirection:"column",backgroundColor:"#7a7",alignItems:"center"}}>
    <ul style={{display:"flex",gap:20,listStyle:"none",justifyContent:"center"}}>
        <li><Link href="https://www.facebook.com/profile.php?id=100015470620889"><Image src={facebook}   width={30} height={30}  alt="fb"/></Link></li>
        <li><Link  href="https://www.linkedin.com/in/suraj-chawhan/"><Image src={linkdin}   width={30} height={30} alt="linkdin" /></Link></li>
        <li><Link href="https://github.com/suraj-chawhan"><Image src={github}   width={30} height={30} alt="github" /></Link></li>
    </ul>
    <h4 style={{alignSelf:"center",color:"white"}}>All Right Reserved By Spotify Clone Suraj</h4>
    </div>
  )
}

export default Footer