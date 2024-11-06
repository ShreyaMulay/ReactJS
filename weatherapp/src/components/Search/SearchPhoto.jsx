import React, { useState } from 'react'
import SearchResult from './SearchResult'

export default function SearchPhoto() {

    const [search,setSearch] = useState("")
   
    const handleOnchange = (e)=>{
        setSearch(e.target.value)
        console.log(search)
    }
  return (
    <div>
        <div className='searchBar'>
            <input type="text"  value={search} placeholder='Search Anything...' onChange={(e)=>handleOnchange(e)}/>
        </div>
        {search && <SearchResult search={search}/>}
    </div>
  )
}
