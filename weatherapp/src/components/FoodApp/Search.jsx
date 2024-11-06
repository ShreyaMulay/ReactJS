import React, { useEffect, useState } from 'react'
import './food.css'

const URL="https://api.spoonacular.com/recipes/complexSearch"
const API_KEY = "a67250cd5b914c74ba9007387c492654"
// ?query=pasta&apiKey=

export default function Search({setFoodData}) {
  const [query ,setQuery] = useState('pizza')

  useEffect(() => {
    async function fetchFood(){
        const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`)
        const data = await res.json()
        setFoodData(data.results)
    }
    fetchFood()
  },[query])

  return (
    <div className='searchContainer'>
      <input type='text' value={query} onChange={(e)=>setQuery(e.target.value)} className='searchInput'/>
    </div>
  )
}
