import React from 'react'

export default function DeleteNotes({setAllNotes}) {
    const handleClick = ()=>{
        setAllNotes([])
    }
    const deleteSingleNote = (id)=>{
      setAllNotes((oldnotes)=>{
        return oldnotes.filter((note,index)=>index !== id )
      })
    }
  return (
    <div style={{margin:'30px'}}>
      <button onClick={handleClick} className='btnnote' style={{width:'10em'}}>Delete all notes</button>
    </div>
  )
}
