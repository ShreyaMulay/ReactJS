import React from 'react'
import '../App.css'

export default function ItemList({food}) {
  return (
    <div>
      <div>
            <h1 className='recipeName'>{food && food.title}</h1>
            {food && <img src={food.image} alt="" className='recipeImg'/> }
            <div className='recipeDetails'>
                <span>
                    <strong>⏰ {food && food.readyInMinutes} Minutes</strong>
                </span>
                <span><strong>👨‍👩‍👧‍👦 Serves: {food && food.servings}</strong></span>
                <span><strong>{food && food.vegetarian ? "🥕 Vegeterian" : "🍗 Non-Vegeterian"}</strong></span>
                <span><strong>{food && food.vegan ?"🐄 Vegan":""}</strong></span>
            </div>
            <div>
                ＄<span><strong>{food && food.pricePerServing/100} Per serving</strong></span>
            </div>
            <h2>Ingredients</h2>
            <div>
                {food.extendedIngredients.map((ing)=>(
                    <div className='imgContainer'>
                        <div className='imgConImage'>
                            <img className="img" src={`https://img.spoonacular.com/ingredients_100x100/`+ing.image} alt="" />
                        </div>
                        <div className="imgContName">
                            <div className='imgContname'>{ing.name}</div>
                            <div className='imgContamt'>{ing.amount} {ing.unit}</div>
                        </div>
                       
                    </div>
                )
                )}
            </div>
            <h2>Instructions</h2> 
            <div className='recipeInstr'>
                <ol>
                    {food && food.analyzedInstructions[0].steps.map((step) =>(<li>{step.step}</li>))}
                </ol>
            </div>
        </div>
    </div>
  )
}
