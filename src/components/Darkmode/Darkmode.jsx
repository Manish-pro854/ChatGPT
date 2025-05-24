import React, { useEffect, useState } from 'react'
import { IoMdSunny } from "react-icons/io";
import "./Darkmode.css"

function Darkmode() {
  
const [mode,setMode] = useState("darkmode")
function toggle(){
  if(mode==="darkmode"){
    setMode("lightmode")
  }else{
    setMode("darkmode")
  }
}
useEffect(()=>{
  document.body.className=mode
},[mode])
  return (
    <div>
      <button className='darkmodebtn' onClick={()=>{
        toggle()        
      }}><IoMdSunny /></button>
    </div>
  )
}

export default Darkmode
