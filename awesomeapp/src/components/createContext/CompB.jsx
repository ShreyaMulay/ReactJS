import React, { useContext } from 'react'
import CompC from './CompC'
import {FirstName,LastName} from './Context';

//using usecontext()
export default function CompB() {
  const fname = useContext(FirstName);
  const lname = useContext(LastName);

  return (
    <div>
      {/* <CompC /> */}
      <h1> My name is {fname} {lname}</h1>
    </div>
  )
}
