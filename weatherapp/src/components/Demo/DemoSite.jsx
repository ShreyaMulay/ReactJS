import React from 'react'
import Nav from './Nav'
import {Outlet}  from 'react-router-dom'

export default function DemoSite() {
  return (
    <div>
         <Nav />
         <Outlet />
    </div>
  )
}