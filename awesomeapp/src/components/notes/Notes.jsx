import React, { useState } from 'react'
import Header from './Header'
import CreateNote from './CreateNote'
import ShowNotes from './ShowNotes'



export default function Notes() {
  const [addItem,setAddItem] = useState([])

  const addNote = (note)=>{
    // console.log('clicked',note)
    setAddItem((prev)=>{
      return [...prev,note]
    })
  }
  const cutIt = (note)=>{
    console.log('note cutit',note)
    setAddItem((oldItems) =>{
      console.log('oldItems', oldItems)
         return oldItems.filter((item,index) => index !== note);
       
    })
  }
  return (
    <div>
        <Header />
        <CreateNote passNote={addNote} />
        <ShowNotes newNote={addItem} deleteItem={cutIt}/>
    </div>
  )
}
