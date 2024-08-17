import React, { createContext } from 'react'
import CompA from './CompA'

const FirstName = createContext()
const LastName = createContext()


export default function Context() {
  return (
    <div>
        <FirstName.Provider value={"Shreya "}>
            <LastName.Provider value={"Mulay"}>
            <CompA />
            </LastName.Provider>
         </FirstName.Provider>
      
    </div>
  )
}


export {FirstName,LastName}