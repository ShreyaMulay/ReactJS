import React, { useState } from 'react'

export default function DigitalClock() {

//   let time = new Date().toLocaleTimeString()

  const [time,setTime] = useState( new Date().toLocaleTimeString())

  setInterval(() => {
    setTime(new Date().toLocaleTimeString())
  },1000)

  return (
    <div className='basic'>
      <h1>{time}</h1>
    </div>
  )
}
