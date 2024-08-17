import React, { useState } from 'react'

export default function Login() {


  const [name, setName ]= useState('')
  const [lastname, setlastName ]= useState('')


  const [FullName, setFullName] = useState('')
  
  const inputEnter = (event) => {
    console.log('Entering',event.target.value);
    setName(event.target.value)
  }
  const inputLastEnter = (event) => {
    setlastName(event.target.value)
  }

  const showName = (event) =>{
    event.preventDefault();
    setFullName(name+" "+ lastname)
  }
  return (
    <div className='basic' style={{background: 'aliceblue'}}>
        <form onSubmit={showName} style={{display: 'flex',flexDirection: 'column'}}>
            <h1>Hello {FullName}</h1>
            <input type="text" placeholder="Enter your first name" value={name} onChange={inputEnter}/>
            <input type="text" placeholder="Enter your last name" value={lastname} onChange={inputLastEnter}/>

            <button className='btn btn-primary' type="submit">CLICK ME 😎</button>
        </form>
    </div>
  )
}
