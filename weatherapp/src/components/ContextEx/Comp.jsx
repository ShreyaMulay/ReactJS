import React, { createContext } from 'react'
import Comp1 from './Comp1'

const FirstName = createContext()
const LastName = createContext()

export default function Comp() {
  return (
    <div>
      <FirstName.Provider value={'shreya'}>
          <LastName.Provider value={'mulay'}>
            <Comp1 />
            </LastName.Provider>
      </FirstName.Provider>
    </div>
  )
}

export {FirstName,LastName}