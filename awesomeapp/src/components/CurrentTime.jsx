import React, { useState } from 'react'

export default function CurrentTime() {

//   let time = new Date().toLocaleTimeString()

  const [time, setTime] = useState(new Date().toLocaleTimeString())
  
  const ShowTime = () =>{
    // time = new Date().toLocaleTimeString()
    setTime(new Date().toLocaleTimeString())
    // console.log('time',time)


  }
  return (
    <div className='basic'>
       <h1> {time} </h1>
       <button className="btn btn-primary" onClick={ShowTime} style={{background: '#9b59b6',border: '2px solid #9b59b6',padding: '10px 20px'}}>GET TIME</button>

    </div>
  )
}
