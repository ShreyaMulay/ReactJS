import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity } from '../../features/cartSlice';


const AddToCart = ({product}) => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);

    const quantity = cart[product.id] ? cart[product.id].quantity : 0;


  return (
    <div>
        {
            quantity === 0 
            ?  
            <button type="button" className="btn btn-warning" onClick={()=>dispatch(increaseQuantity(product))}>Add To Cart</button> 
            : 
            <div style={{ display: "flex",alignItems: "center",justifyContent: "space-evenly"}}>
                 <button type="button" class="btn btn-danger" onClick={()=>dispatch(decreaseQuantity(product))}>-</button>
                <span> {quantity} </span>
                <button type="button" class="btn btn-warning" onClick={()=>dispatch(increaseQuantity(product))}>+</button>
            </div>
        }
       
    </div>
  )
}

export default AddToCart
