import React, { createContext, useState } from 'react'
import Checkout from './Checkout'
import Login from './Login'
import Logout from './Logout'

export const userContext =  createContext()

export default function ContextHook() {
  const [user,setUser] = useState('guest')
  return (
    <div>
      <userContext.Provider value={{user , setUser}}>
        <Login />
        <Checkout />
        <Logout />
      </userContext.Provider>
    </div>
  )
}
