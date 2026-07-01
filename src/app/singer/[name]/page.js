"use client"

import React, { useEffect, useState } from 'react'
import spotifyLogo from "../../../../public/spotifylogo.png"
import { useParams } from 'next/navigation'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Bigplay from  '../../../../public/bigplay.png'
import {FaArrowLeft} from 'react-icons/fa';
export default function Singer() {
const params=useParams()
const{name}=params;
const [storeMusic,setStoreMusic]=useState({})
const router=useRouter()
const[musicData,setMusicData]=useState([])

useEffect(()=>{
  const fetchData=async()=>{
 
    const res=await fetch("/api/singer");
    const data=await res.json()
    
    const store=data.filter(val=>val.singer===name)
    setStoreMusic(store[0])
    setMusicData(store)

  }

  fetchData();
},[name])




return (
  <div style={{width:"100%",height:"100%",backgroundColor:"black",display:"flex",flexDirection:"column",alignItems:"center",color:"white"}}>
    <FaArrowLeft size="7em"  style={{color:"white", alignSelf:"flex-start",margin:"10px 0px 0px 0px"}} onClick={()=>router.back()}/>

<Image src={storeMusic.musicimg}  width={250} height={250}  style={{borderRadius:10}} alt="musicimg"/>
<div style={{marginLeft:10,alignSelf:"flex-start"}}>
<h1>{storeMusic?.singer?.toUpperCase()}</h1>

<h4 style={{fontSize:19}}>{storeMusic.description}</h4>
<Image src={spotifyLogo}  width={300} height={100} alt="pause" />
<h4>Likes 4000 about 10hr</h4>
</div>
<div style={{display:"flex",flexDirection:"column",gap:10,width:"100%",height:"100%",overflowY:"auto"}}>
{musicData?musicData.map((val,index)=>{
  return(
<div  key={index} style={{padding:0,backgroundColor:"#999",display:"flex",justifyContent:'space-between',alignItems:"center",padding:"0px 20px 0px 20px"}}>
<h1 style={{color:"green"}}>{val.title}</h1>
<Image src={Bigplay}     onClick={()=>router.push(`/play/${index}/${val.singer}`)} width={100} height={100}  alt="play"/>
</div>
  );
}):<h1>hello</h1>}
</div>
  </div>
  );
}

