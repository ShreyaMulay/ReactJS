import React from 'react'
import './food.css'

export default function InnerContainer({children}) {
  return (
    <div className='innerContainer'>
      {children}
    </div>
  )
}
