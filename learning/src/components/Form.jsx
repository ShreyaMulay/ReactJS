import React, { useState } from 'react'

export default function Form() {
    const [inputValue, setInputValue] = useState({firstname:'',lastname:''})
    const handleChange = (e,name) =>{
        if(name  ==='fname')
            setInputValue({...inputValue,firstname:e.target.value})
        else if(name === 'lname')
            setInputValue({...inputValue,lastname:e.target.value})


    }
    const handleClick = (e) =>{
        e.preventDefault();
        console.log(inputValue)

    }
  return (
    <div>
      <input type="text" value={inputValue.firstname} onChange={(e)=>handleChange(e,"fname")}/>

      <input type="text" value={inputValue.lastname} onChange={(e)=>handleChange(e,"lname")}/>

      <button onClick={(e)=>handleClick(e)}>Add</button>

    </div>
  )
}
