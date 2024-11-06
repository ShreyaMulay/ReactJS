import React,{useState,useEffect} from 'react'
import './Chat.css'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import InsertEmoticonOutlinedIcon from '@mui/icons-material/InsertEmoticonOutlined';
import MicOutlinedIcon from '@mui/icons-material/MicOutlined';
const Chat = () => {
    const [seed,setSeed] = useState()
    const [input,setInput] = useState()

    useEffect(() =>{
        setSeed(Math.floor(Math.random() * 5000))
    },[])

    const sendmessage = (e)=>{
      e.preventDefault()
      console.log("You typed : ",input)

    }
   
  return (
    <div className='chat'>
      <div className="chatheader">
        <AccountCircleOutlinedIcon />
        <div className="chatheader_info">
            <h2>Room Name</h2>
            <p>Last seen at ...</p>
        </div>
        <div className="chatheader_right">
            <SearchOutlinedIcon />
            <AttachFileOutlinedIcon />
            <MoreVertOutlinedIcon />
            
        </div>

      </div>
      <div className="chatbody">
        <p className='chatmsg chat_receiver'>    
        <span className="chat_name">sonny</span>
        chatmg
        <span className="chat_timestamp">
                3.76pm
        </span>
        </p>
        

      </div>
      <div className="chatfooter">
            <InsertEmoticonOutlinedIcon />
            <form>
                <input value={input} onChange={(e)=>setInput(e.target.value)}type="text" name="" id="" />
                <button onClick={sendmessage} type='submit'>Send a message</button>
            </form>
            <MicOutlinedIcon />

      </div>
    </div>
  )
}

export default Chat
