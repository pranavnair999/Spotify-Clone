import Image from 'next/image'

import Link from 'next/link'
export default function Banner({val}){
  return(
    <div>
   <Link href={`/singer/${val.singer}`} style={{textDecoration:"none",color:"white"}}>
   <div>
   <Image 
   src={val.musicbanner} 
   width={135} height={135}
    style={{borderRadius:15,marginTop:5}} alt="banner"/>
   <p style={{marginTop:10}}>{val.title}</p>
   </div>
   </Link>
   </div>
    )
}