import React,{useEffect, useState} from 'react'
import './food.css'
import ItemList from './ItemList'


export default function FoodDetails({foodId}) {

    const [food,setFood] = useState()
    const [isLoading ,setIsLoading] = useState(false)
    const URL = `https://api.spoonacular.com/recipes/${foodId}/information`
    const API_KEY = "a67250cd5b914c74ba9007387c492654"

   
    useEffect(() => {
        async function getInfo(){
            const res = await fetch(`${URL}?apiKey=${API_KEY}`)
            const data = await res.json()
            console.log(data)
            setFood(data)
            setIsLoading(true)
        }
        getInfo()

    },[foodId])
    
    return (
        <div className='recipeCard'>
            {isLoading ? ( <ItemList  food={food}/> ): ''}
        </div>
    )
}
