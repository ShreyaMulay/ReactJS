import React from 'react'
// import Netflix from './Netflix'
// import Greet from './Greet'


export default function Calculator() {
  
    const add = (a,b) =>{
        let sum = 0;
        sum = a + b;
        return sum;
    }
    const sub = (a,b) =>{
        return a - b;
    }
    const mult = (a,b) =>{
        return  a * b;
    }
    const div = (a,b) =>{
        let div = a / b;
        div = div.toFixed(2)
        return div
    }

  return (
    <div>
      <h3>Sum of 2 nos is {add(1,2)} </h3>
      <h3>Subtraction of 2 nos is {sub(1,2)} </h3>
      <h3>Multiplication of 2 nos is {mult(1,2)} </h3>
      <h3>Division of 2 nos is {div(40,3)} </h3>

      {/* {add(1,2) >= 10 ? "shreya" :"mulay"} */}
      {/* {add(11,2) >= 10 ? <Netflix/> :<Greet />} */}

    </div>
  )
}
