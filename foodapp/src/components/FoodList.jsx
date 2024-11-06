import FoodItem from './FoodItem'

export default function FoodList({foodData,setFoodId}) {
  return (
    <div>
        {
          foodData.map((food,item)=>
            <FoodItem key={item} food={food} setFoodId={setFoodId}/>
            )
        }
    </div>
  )
}
