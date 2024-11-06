import React,{useContext} from 'react'

import {FirstName,LastName} from './Comp';
export default function Comp1() {
  const context = useContext(FirstName)
  const lname = useContext(LastName)


  return (
    <div>
      {context} {lname}
        {/* <FirstName.Consumer>
            {(fname)=> {
              return <h1>My name is {fname}</h1>
            }}
        </FirstName.Consumer> */}
    </div>
  )
}
