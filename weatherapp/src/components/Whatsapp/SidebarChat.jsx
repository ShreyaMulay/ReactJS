import React, { useEffect, useState } from 'react'
import './SidebarChat.css'

const SidebarChat = ({id,name,addNewChat}) => {
    const [seed,setSeed] = useState()
    useEffect(() =>{
        setSeed(Math.floor(Math.random() * 5000))
    },[])
    const createChat = ()=>{
        const roomname = prompt('Please enter room name for chat');

        if(roomname)
        {
            
        }
    }
  return !addNewChat ? (
    <div className='sidebarchat'>
      {/* <AccountCircleOutlinedIcon src="https://api.dicebear.com/9.x/pixel-art/svg?seed=sony" /> */}
      <img src={`https://api.dicebear.com/9.x/pixel-art/svg?seed=${seed}`} alt=" " style={{ width: "50px",height: "50px",
    borderRadius: "50%"}}/>
      <div className="sidebarChat_info">
        <h2>Room Name</h2>
        <p>LAst message...</p>
      </div>
    </div>
  ) : (
    <div onClick={createChat} className='sidebarchat'>
        <h2>Add New Chat</h2>
    </div>
  )
}

export default SidebarChat
