import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function HomePage() {
  const [username ,setUsername] = useState('')
  const navigate = useNavigate()
  function handleClick()
  {
    navigate("/dashboard/profile",{state:{username}})
  }
  return (
    <>
    <div>Homepage</div>
    <input type='text' value={username} onChange={(e)=>setUsername(e.target.value)} />
    <button onClick={handleClick}>Go to profile page</button>
    </>
  )
}
