import React, { useState } from 'react'



export default function Basic() {
// const state = useState()
// console.log(state)

const [number,setNumber] = useState(0)


// let number = 0
const Increment = () => {
    setNumber(number + 1)
    // number = number + 1
    // console.log('number',number)

}
const Decrement = () => {
    setNumber(number - 1)
    // number = number + 1
    // console.log('number',number)

}


return (
    <div className='basic'>
        <h1> {number} </h1>
        <div style={{display:'flex'}}>
            <button className="btn btn-primary" onClick={Decrement} style={{background: '#9b59b6',border: '2px solid #9b59b6',padding: '10px 20px'}}>--</button>
            <button className="btn btn-primary" onClick={Increment} style={{background: '#9b59b6',border: '2px solid #9b59b6',padding: '10px 20px'}}>++</button>
        </div> 
      
    </div>
  )
}
