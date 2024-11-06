import React,{useContext} from 'react'
import {CartContext} from '../../App'

const AddToCart = ({product}) => {
    const { cart, increaseQuantity, decreaseQuantity } = useContext(CartContext);
    const quantity = cart[product.id] ? cart[product.id].quantity : 0;

  return (
    <div>
        {
            quantity === 0 
            ?  
            <button onClick={()=>increaseQuantity(product)}>Add To Cart</button> 
            : 
            <div>
                 <button onClick={()=>decreaseQuantity(product)}>-</button>
                <span> {quantity} </span>
                <button onClick={()=>increaseQuantity(product)}>+</button>
            </div>
        }
       
    </div>
  )
}

export default AddToCart
