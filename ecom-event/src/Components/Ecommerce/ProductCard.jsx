import AddToCart from "./AddToCart";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { setSelectedProduct } from "../../features/productsSlice";


function ProductCard({ product }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
    dispatch(setSelectedProduct(product));

  };
  return (
     <div className="card" style={{width: "18rem",margin: "10px 10px"}} >
        <img src={product.imgSrc} className="card-img-top" alt="..." onClick={handleCardClick}/>
        <div className="card-body">
            <p className="card-text">Name : {product.title}</p>
            <p className="card-text">Price : ${product.price}</p>
            <AddToCart product={product}/>
        </div>
    </div>

  )
}

export default ProductCard;

// passing of parameters in react is called as props