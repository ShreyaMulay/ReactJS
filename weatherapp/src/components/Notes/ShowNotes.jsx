import React from 'react'

export default function ShowNotes({allNotes}) {
  return (
    <div>
      
      <div className='showallotes'>
            {allNotes.map((item)=>
            <div className="notesinfo" style={{backgroundColor: item.color}}>
                <div className='notestitle'>{item.title}</div>
                <div className='notesdesc'>{item.desc}</div>
            </div>)}
      </div>
     
    </div>
  )
}
