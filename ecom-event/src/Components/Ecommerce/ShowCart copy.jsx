import React,{useContext} from 'react'
import {CartContext} from '../../App'


const ShowCart = () => {
 const { cart } = useContext(CartContext);

 const cartItems = Object.entries(cart);
  return (
    <div className='productcards'>
        {cartItems.map(([itemId, item]) => (
            <div className="card" style={{width: "18rem",margin: "10px 10px"}}  key={itemId}>
                <img src={item.imgSrc} className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text">Name : {item.title}</p>
                    <p className="card-text">Price : ${item.price}</p>
                    <p className="card-text">Quantity : {item.quantity}</p>
                </div>
            </div>


          ))}
    </div>
  )
}

export default ShowCart
