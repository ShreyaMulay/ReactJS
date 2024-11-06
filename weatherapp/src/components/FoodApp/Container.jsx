import React from 'react'
import './food.css'

export default function Container({children}) {
  return (
    <div className='parentContainer'>
      {children}
    </div>
  )
}

