import React from 'react'
import './Main.css'
import Sidebar from './Sidebar'
import Chat from './Chat'
const Main = () => {
  return (
    <div>
      <div className="main">
        <h1>WhatsApp Clone</h1>
        <div className="main_body">
            <Sidebar />
            <Chat />
        </div>
      </div>
    </div>
  )
}

export default Main
