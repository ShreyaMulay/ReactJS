import React, { useState } from 'react'

export default function Events() {

  const [bg,setUpdate] = useState({background:'#f5d3d3'})

  const [updateText,setName] = useState('Shreya')

//   let updateText = 'Shreya'
  const UpdateValue = () => {
    if(updateText === 'Shreya')
    {
        setUpdate({
            background:'#34459e',
        })
        setName('Mulay')
    }
    else if(updateText === 'Mulay')
    {
        setUpdate({
            background:'#ffe9c5',
        })
        setName('Shreya Mulay')
    }
    else{
        setUpdate({
            background:'#b4f2e1',
        })
        setName('Shreya')

    }

  }

  return (
    <div className='basic' style={bg}>
        <button className='btn btn-primary' onClick={UpdateValue} onMouseEnter={UpdateValue} onMouseLeave={UpdateValue}>{updateText}</button>
    </div>
  )
}
