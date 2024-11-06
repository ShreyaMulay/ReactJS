import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Profile() {
  const location = useLocation()

  const {username} = location.state ? location.state : {}
  return (
    <div>
      <h1>Profile for {username}</h1>
    </div>
  )
}
