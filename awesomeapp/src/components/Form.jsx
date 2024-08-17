import React, { useState } from 'react'

export default function Form() {


  const [name, setName ]= useState('')

  const [FullName, setFullName] = useState('')
  const inputEnter = (event) => {
    console.log('Entering',event.target.value);
    setName(event.target.value)
  }

  const showName = (event) =>{
    setFullName(name)
  }
  return (
    <div className='basic' style={{background: 'aliceblue'}}>
      <h1>Hello {FullName}</h1>
      <input type="text" placeholder="Enter your name" value={name} onChange={inputEnter}/>
      <button className='btn btn-primary' onClick={showName}>CLICK ME 😎</button>
    </div>
  )
}
