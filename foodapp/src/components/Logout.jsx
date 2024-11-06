import React,{useContext} from 'react'
import {userContext} from  './ContextHook'

export default function Logout() {
  const {user,setUser} = useContext(userContext)

  const handleClick = () => {
    setUser('guest')
  }

  return (
    <div>
      <button onClick={handleClick}>Logout</button>
    </div>
  )
}
