import React from 'react'
import { Link } from 'react-router-dom'

export default function TopBar() {
  return (
    <div style={{display:'flex',justifyContent:'space-evenly'}}>
         <Link to='/'>Recipe App</Link>

         <Link to='/homepage'>homepage</Link>

         <Link to='/dashboard'>Dashboard</Link>
         <Link to='/hooks'>Hooks</Link>
         <Link to='/bankAcc'>Hooks Bank Ex</Link>
         <Link to='/dashboard'>Dashboard</Link>
         <Link to='/products/:id'>Product</Link>
         <Link to='/context'>Context Hook</Link>
         <Link to='/memo'>Memo Hook</Link>



     </div>
  )
}
