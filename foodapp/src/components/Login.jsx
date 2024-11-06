import React, { useState,useContext } from 'react'
import {userContext} from  './ContextHook'

export default function Login() {
    const [value,setValue] = useState()
    const {user,setUser} = useContext(userContext)
   
    function handleSubmit(e)
    {
        e.preventDefault()
        setUser(value)
        setValue('')

    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={value} onChange={(e)=>setValue(e.target.value)} />
            <button type='submit'>login</button>
        </form>
     
    </div>
  )
}
