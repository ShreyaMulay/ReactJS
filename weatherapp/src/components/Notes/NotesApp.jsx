import React,{useState} from 'react'
import AddNotes from './AddNotes'
import ShowNotes from './ShowNotes'
import DeleteNotes from './DeleteNotes'


export default function NotesApp() {
  const DEFAULT_COLOR = '#FECB00';

  const [note,setNote] = useState({title:'',desc:'',color:DEFAULT_COLOR})

  const [allNotes,setAllNotes] = useState([])

  return (
    <div style={{margin:'auto', textAlign: 'center'}}>
      <h1>NotesApp</h1>
      <AddNotes setNote={setNote} setAllNotes={setAllNotes} note={note} allNotes={allNotes}/>
      <DeleteNotes setAllNotes={setAllNotes}/>
      <ShowNotes allNotes={allNotes}/>

    </div>
  )
}
