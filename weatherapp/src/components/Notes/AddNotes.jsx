import React from 'react'
import ColorPicker from './ColorPicker'
export default function AddNotes({setNote,setAllNotes,note,allNotes}) {

    const handleSubmit = (e)=>{
        e.preventDefault();
        setAllNotes([note, ...allNotes])
        setNote({title: '',desc:''})
    }
    const handleOnChangeTitle =(e)=>{
        setNote({
            ...note,
            title: e.target.value
          });
    }
    const handleOnChangeDesc =(e)=>{
        setNote({
            ...note,
            desc: e.target.value
          });
    }
    const handleColorChange = (color)=>{
        setNote({
            ...note,
            color: color
          });

    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div className='addnotes'>
                <div>
                    <input type="text" placeholder="Enter your title..." value={note.title} onChange={(e)=>handleOnChangeTitle(e)} className="searchInput" />
                </div>
                <div>
                    <input type="text" placeholder="Enter your note text.." value={note.desc} onChange={(e)=>handleOnChangeDesc(e)} className="searchInput" />
                </div>
                <div style={{display:'flex',justifyContent: 'space-between',padding: '30px 50px'}}>
                    
                    <ColorPicker value={note.color} onChange={handleColorChange}/>

                    <button type="submit" className='btnnote'>Add</button>
                </div>
            
               
            </div>
           
        </form>
    

    </div>
  )
}
