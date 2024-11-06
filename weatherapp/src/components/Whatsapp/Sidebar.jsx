import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChatIcon from '@mui/icons-material/Chat';
import SidebarChat from './SidebarChat';

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
const Sidebar = () => {
    const [rooms,setRooms] = useState([])
    useEffect(() => {
        async function getRooms(){
            const resp = await fetch('https://run.mocky.io/v3/266523b5-9efb-4901-9f17-80a25c8c3d96')
            const data = await resp.json()
            // console.log(data)
            setRooms(data)

            console.log("rooms ",rooms)
        }
        getRooms()
    },[])
  return (
    <div className='sidebar'>
        <div className="sidebar_header">
            <AccountCircleIcon />
            <div className="header_right">
                <DonutLargeIcon />
                <ChatIcon />
                <MoreVertIcon />
            </div>

        </div>
        <div className="sidebar_search">
            <div className="search-container">
                <SearchOutlinedIcon />
                <input type="text" name="" id="" placeholder='Search or start new chat...'/>
            </div>
        </div>
        <div className="sidebar_chats">
            <SidebarChat addNewChat />
           {rooms.map(room => (
            <SidebarChat key={room.id} id={room.id} name={room.name}/>
           ))}
           
        </div>
      
    </div>
  )
}

export default Sidebar
