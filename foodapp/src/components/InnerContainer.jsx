import React from 'react'
import '../App.css'

export default function InnerContainer({children}) {
  return (
    <div className='innerContainer'>
      {children}
    </div>
  )
}
