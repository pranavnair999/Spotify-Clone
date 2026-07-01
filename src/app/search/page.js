"use client";
import React, { useEffect, useState } from "react";
import Bigplay from "../../../public/bigplay.png"
import Image from "next/image";
import { useRouter } from "next/navigation.js";
import { FaSearch,FaArrowLeft} from "react-icons/fa";
export default function Search() {
 const[music,setMusic]=useState([])
  const [musicBanner, setMusicBanner] = useState([]);
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
 const router=useRouter()

  useEffect(() => {
    const fetchData = async () => {
      const res1 = await fetch("/api/banner");
      const res2 = await fetch("/api/singer");

      const data1 = await res1.json();
      const data2 = await res2.json();

      setMusicBanner(data1);
      setMusic(data2);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filteredData = musicBanner.filter((val) =>
      val.singer.toLowerCase().startsWith(search.toLowerCase())
    );
    setData(filteredData);
  }, [search, musicBanner]);


  useEffect(() => {
    const filteredData = music.filter((val) =>
      val.singer.toLowerCase().startsWith(search.toLowerCase())
    );
    setData2(filteredData);
  }, [search, musicBanner]);


  return (
    <div style={{width:"100%",display:"flex",flexDirection:'column',gap:20,backgroundColor:"#222"}}>
        <div  style={{display:"flex",alignItems:"center",justifyContent:'center',gap:30,boxShadow:"1px solid black",margin:20}}>
         <FaArrowLeft size="2em"  style={{color:"white",alignSelf:'flex-start'}} onClick={()=>router.back()}/>
      <div style={{display:"flex",alignItems:'center',gap:30}}>
      <input
        type="search"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{padding:"10px 50px 10px 50px",textAlign:'left'}}
      />
      <FaSearch size="2em" style={{color:"white"}}  onClick={()=>setSearch(search)}/>
      </div>
      </div>
      <div style={{display:"flex",overflowX:"auto",gap:20}}>
      {data.length > 0 ? (
        data.map((val) => (
          <div key={val.id} style={{backgroundColor:"#777",borderRadius:10,padding:5,color:'white'}} onClick={()=>router.push(`/singer/${val.singer}`)} >
             <Image src={val.musicbanner} width={100}  height={100}  alt={`musics`} />
            <p style={{textAlign:'center'}}>{val.singer}</p>
          </div>
        ))
      ) : (
        <p>No results found</p>
      )}
      </div>

      <hr/>
      <div style={{display:"flex",flexDirection:"column",gap:10}}>
      {data2.length > 0 ? (
        data2.map((val,index) => (
          <div key={val.id} style={{display:"flex",justifyContent:"space-between",alignItems:'center',backgroundColor:"#777",color:"white"}} onClick={()=>router.push(`/play/${index}/${val.singer}`)} >
            <h4 style={{marginLeft:20}}>{val.title}</h4>
            <Image src={Bigplay}  width={100} height={100}  alt="Play"/>
          </div>
        ))
      ) : (
        <p>No results found</p>
      )}
      </div>
    </div>
  );
}
