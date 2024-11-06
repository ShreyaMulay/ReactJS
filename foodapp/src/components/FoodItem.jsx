import React from 'react'
import '../App.css'

export default function FoodItem({food,setFoodId}) {
  const showViewRecipe = (id)=>{
    setFoodId(id)
  }
  return (
    <div className='itemContainer'>
        <img src={food.image} alt="" className='itemImage'/>
        <div className='itemContent'>
          <p className='itemName'>{food.title}</p>
        </div>
        <div className='btnContainer'>
          <button className='itemButton' onClick={()=>showViewRecipe(food.id)}>View Recipe</button>
        </div>
       

    </div>
  )
}
