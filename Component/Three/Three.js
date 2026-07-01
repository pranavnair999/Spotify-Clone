import React from 'react'
import {Canvas} from "@react-three/fiber"

function Three({Model,styleCanvas}) {
  return (
    <Canvas style={{width:400,height:styleCanvas.height,margin:styleCanvas.margin}} gl={{alpha:true}}>
    <ambientLight intensity={4} />
    <spotLight intensity={2}/>
    <hemisphereLight position={[1,1,1]} intensity={5} />
    <Model/>
    </Canvas>
  )
}

export default Three