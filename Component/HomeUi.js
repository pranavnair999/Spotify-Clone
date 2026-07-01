
import Banner from './Banner.js'
export default function FindBanner({music,song}){
  
const Music=music.filter(val=>val.musiccatagory===song)
const getBanner=Music.map(val=><Banner val={val} key={val.id}/>)
  return(
    <div style={{display:"flex",gap:50}}>
    {getBanner}
    </div>
    );
}

