"use client";

import React, { useState, useRef, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Three from '../../../../../Component/Three/Three';
import Bigpause from  '../../../../../public/bigpause.png'
import Bigplay from  '../../../../../public/bigplay.png'
import Model from '../../../../../Component/Three/Spiderman.js';
import { FaBackward,FaForward,FaArrowLeft} from 'react-icons/fa';

function PlayMusic() {
  const params=useParams();
  const { singer,id} = params;
  const [playing,setPlaying]=useState(false);
  const [range,setRange]=useState(0);
  const [duration,setDuration]=useState(0);
  const audioRef=useRef(null);
  const [musicData,setMusicData]=useState([]);
  const [currentMusic, setCurrentMusic]=useState(Number(id));
  const router=useRouter();

  const play = () => {
    if (!playing) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    setPlaying((prev)=>!prev);
  };



  const handleCanPlay = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration || 0);
    }
  };

  useEffect(() => {
    const fetchData=async()=>{
      const res=await fetch("/api/singer");
      const data=await res.json();
      const store=data.filter((val)=>val.singer===singer);
      setMusicData(store);
    };
    fetchData();
  }, [singer]);

  const handleSliderChange = (e) => {
    const newTime = parseFloat(e.target.value);
    audioRef.current.currentTime = newTime;
    setRange(newTime);
  };

  const restartSong=()=> {
    audioRef.current.currentTime=0;
    setRange(0);
    audioRef.current.play();
    setPlaying(true);
    
  };

  const Prev =() => {
    if (musicData.length>1) {
      audioRef.current.pause();
      setPlaying(false);
      setCurrentMusic((prevMusic) =>
        prevMusic===0?musicData.length-1:prevMusic - 1
      );
      setTimeout(() => {
        audioRef.current.play();
        setPlaying(true);
      }, 0);
    } else {
      restartSong();
    }
  };

  const Next=() => {
    if (musicData.length>1) {
      audioRef.current.pause();
      setPlaying(false);
      setCurrentMusic((prevMusic) =>
        prevMusic === musicData.length-1?0:prevMusic+1
      );
      setTimeout(() => {
        audioRef.current.play();
        setPlaying(true);
      }, 0);
    } else {
      restartSong();
    }
  };

  if (!musicData.length) {
    return <h1>Loading</h1>;
  }

  const handleEnded = () => {
    setRange(0);
    audioRef.current.currentTime=0;
    restartSong() 
  };
  

  return (
    <div style={{ width: "100%", height:"fit", backgroundColor: "#444444", display: "flex", flexDirection: "column", gap: 10 }}>
    <FaArrowLeft size="2em"  style={{color:"white", margin:20}} onClick={()=>router.back()}/>
      <div style={{display:"flex",justifyContent:"center",alignItems:"center",alignSelf:"center",flexWrap:"wrap"}}>
      <Image src={musicData[id]?.musicimg} width={400} height={400} alt={`${singer}`} style={{ alignSelf: "center", borderRadius: 10 }} />
      <Three   Model={Model} styleCanvas={{height:600,margin:10}} />
      </div>
      <input
        type="range"
        min={0}
       max={duration||0}
        value={range}
        step="0.01"
        onChange={handleSliderChange}
       />
  <audio
  ref={audioRef}
  src={`/Musicfiles/${musicData[currentMusic].musicurl}`}
  onCanPlay={handleCanPlay}
  onTimeUpdate={() => setRange(audioRef.current.currentTime)}
  onEnded={handleEnded}
/>
 <div style={{ display: "flex", justifyContent: "space-evenly",alignItems:"center"}}>
 <FaBackward size="2em" onClick={Prev} />
<Image onClick={play}  src={playing?Bigpause:Bigplay} width={100} height={100} alt="play"/>
<FaForward size="2em" onClick={Next}/>
      </div>
   
    </div>
  );
}

export default PlayMusic;
