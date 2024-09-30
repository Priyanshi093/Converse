import React, { useEffect, useRef, useState } from 'react'
import "./chat.css";
import EmojiPicker from 'emoji-picker-react';

function Chat() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("")
  
  /* to open the last msgs only, earlier when uou were opening a chat, it was showing from the first msg */
  const endRef = useRef(null)

  useEffect(()=>{
    endRef.current?.scrollIntoView({behaviour : "smooth"})
  }, [])
  

  const handleEmoji = e =>{
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };

  console.log(text)

  return (
    <div className='chat'>
      <div className='top'>
         <div className='user'>
            <img src='./avatar.png' alt=''/>
            <div className='texts'>
              <span>Jane Doe</span>
              <p>description user</p>
            </div>
          </div>
         <div className='icons'>
           <img src='./phone.png' alt=''/>
           <img src='./video.png' alt=''/>
           <img src='./info.png' alt=''/>
         </div>
      </div>

      <div className='center'>

        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates sequi tempore, accusamus doloremque temporibus officia </p>
            <span>1 min ago</span>
          </div>
        </div>

        <div className="messageOwn">         
          <div className="texts">
            <img src="avatar.png" alt="" />
            <p>okay, have fun</p>
            <span>1 min ago</span>
          </div>
        </div>

        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates sequi tempore, accusamus doloremque temporibus officia ea ipsam similique sit quasi quos, quisquam quo molestiae, a laudantium ipsum ad sapiente odio.</p>
            <span>1 min ago</span>
          </div>
        </div>

        <div className="messageOwn">          
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. V quos, quisquam quo molestiae, a laudantium ipsum ad sapiente odio.</p>
            <span>1 min ago</span>
          </div>
        </div>

        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates sequi tempore, accusamus doloremque temporibus officia ea ipsam similique sit quasi quos, quisquam quo molestiae, a </p>
            <span>1 min ago</span>
          </div>
        </div>

        <div className="messageOwn">
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates sequi tempore, accusamus doloremque temporibus officia ea ipsam similique sit quasi quos, quisquam quo molestiae, a laudantium ipsum ad sapiente odio.</p>
            <span>1 min ago</span>
          </div>
        </div>

        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vhello everuonfifjiewe odio.</p>
            <span>1 min ago</span>
          </div>
        </div>

        <div className="messageOwn"> 
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates sequi tem ipsam similique sit quasi quos, quisquam quo molestiae, a laudantium ipsum ad sapiente odio.</p>
            <span>1 min ago</span>
          </div>
        </div>
        
        <div ref={endRef}></div>
      
      </div>

      <div className='bottom'>
        <div className='icons'>
          <img src='./img.png' alt=''/>
          <img src='./camera.png' alt=''/>
          <img src='./mic.png' alt=''/>
        </div>

        <input type='text' 
         placeholder='type your message..'
         value={text}
         onChange={(e) => setText(e.target.value)}/>

        <div className='emoji'>
          <img src='./emoji.png' alt='' 
           onClick={()=>setOpen(prev=>!prev)}
          />
          
          <div className="picker">
           <EmojiPicker open={open}
           onEmojiClick={handleEmoji}/>
          </div>
          
        </div>
        <button className='sendButton'>send</button>
        
      </div>
    </div>
  )
}

export default Chat
