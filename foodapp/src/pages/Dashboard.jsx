import React from 'react'
import {Outlet,Link} from 'react-router-dom'

export default function Dashboard() {
  return (
    <div>
      <li>
        <Link to='profile'>Profile</Link>
      </li>
      <li>
        <Link to='setting'>Setting</Link>
      </li>
      <Outlet />
    </div>
  )
}
