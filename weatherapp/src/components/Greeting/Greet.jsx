import React, { useState } from 'react'
import Clock from 'react-live-clock';


export default function Greet() {
    const currentDate = new Date().getHours()    

    let greeting = {msg:'',color:''}
    if(currentDate >=1 && currentDate < 12)
    {
        greeting = {
            msg : 'Good Morning'  ,
            color:'red'          
        }
    }
    else if(currentDate >= 12 && currentDate < 18)
    {
        greeting = {
            msg : 'Good Afternoon'  ,
            color:'yellow'          
        }
    }   
    else if(currentDate >= 18 && currentDate < 24)
    {
        greeting = {
            msg : 'Good Night'  ,
            color:'green'          
        }
    }

    let styleEle={
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'aliceblue',
        flexDirection:'column',
    }
       
    let heading ={
        background: '#fff0d5',
        border: '2px solid #d5d1d1',
        padding: '40px',
        borderRadius: '65px',
    }
    //////////////////////
    const [currentTime,stCurrentTime] = useState(new Date().toLocaleTimeString())
    const updateTime= ()=>{

        stCurrentTime(new Date().toLocaleTimeString())

    }
    setInterval(updateTime,60)
    /////////////////////////

    const [msg,setMsg] = useState({text:'Hi',background:'red',color:'green'})

    const handleClick = ()=>{
        if(msg.text === 'Hi')
            setMsg({
                text:'Hello',
                background:'pink',
                color:'blue'
            })
        else if(msg.text === 'Hello')
            setMsg({
                text:'Shreya',
                background:'purple',
                color:'orange'
            })
        else
            setMsg({
                text:'Hi',
                background:'red',
                color:'green'
            })

    }



  return (
    <div style={styleEle}>
        <div>
        <h1 style={heading}>
            Hello Shreya, <span style={{color:greeting.color}}>{greeting.msg}</span>
        </h1>
        </div>
        <div>
            <h2>{currentTime}</h2>
            {/* <button onClick={updateTime} className='btn grid-item'>Get Current Time</button> */}
        </div>
        <div onClick={handleClick} style={{backgroundColor:msg.background,color:msg.color}}>
            <h1><span>{msg.text}</span></h1>
        </div>
        <Clock format={'HH:mm:ss'} ticking={true} timezone={'Asia/Kolkata'} />

    </div>
  )
}
