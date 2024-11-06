import React from 'react'
import './TodoForm.css'
 

export default function Footer({completedTodos,totalTodos}) {
  return (
    <div className='footer'>
      <span className='footerItem'>Completed Todos: {completedTodos}</span>
      <span className='footerItem'>Total Todos: {totalTodos}</span>

    </div>
  )
}
