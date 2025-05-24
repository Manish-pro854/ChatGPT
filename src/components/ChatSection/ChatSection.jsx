import React from 'react'
import "./ChatSection.css"
import Darkmode from '../Darkmode/Darkmode'
import { LuSendHorizontal } from "react-icons/lu";

function ChatSection() {
  return (
    <div className='chatsection'>
      <div className="topsection">
        <div className="headings">
          <span>HELLO MINKU,</span>
          <span>I'm Your Own Assistant</span>
          <span>What can I help you?</span>
        </div>
      </div>
      <div className="bottomsection">
        <input type="text" placeholder='Enter a prompt'/>
        <button id='sendbtn'><LuSendHorizontal /></button>
        <Darkmode/>
      </div>
    </div>
  )
}

export default ChatSection
