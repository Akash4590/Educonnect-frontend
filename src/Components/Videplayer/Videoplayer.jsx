import React, { useRef } from 'react'
import './Videoplayer.css'
import vide from "../../assets/vide.mp4"
function Videoplayer({playstate,setplaystate}) {
  const player= useRef(null);
  const closeplayer=(e)=>{
    if(e.target===player.current){
      setplaystate(false)
    }
  }
  return (
    <div className={`video-player ${playstate?'':'hide'}`} ref={player} onClick={closeplayer}>
      <video src={vide} autoPlay muted controls></video>
    </div>
  )
}

export default Videoplayer
