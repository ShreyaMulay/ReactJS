import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import AddToCart from './AddToCart';


const ProductDetailPage = () => {
    const { selectedProduct } = useSelector((state) => state.products);

    console.log("selectedProduct ",selectedProduct)
    const [product, setProduct] = useState(null);
    const navigate = useNavigate();
  
    useEffect(() => {
        if (selectedProduct) {
            setProduct(selectedProduct);
        }
    }, [selectedProduct]);

    if (!product) return <div>Loading...</div>;
  return (

<>
    <button onClick={() => navigate(-1)}>Back to Products</button>

    <div style={{display: "flex",justifyContent: "center"}}>
        <div className="a-spacing-small 360IngressTemplate pos-360 aok-hidden">
                        <img
                        alt=""
                        className='productimg'
                        src="https://m.media-amazon.com/images/G/01/HomeCustomProduct/360_icon_73x73v2._CB485971279_SS40_FMpng_RI_.png"
                        />
                        <img  className='productimg' src="https://m.media-amazon.com/images/I/4186yrrWE9L._AC_US40_.jpg" alt=""/>
                        <img  className='productimg' src="https://m.media-amazon.com/images/I/31jyRLi5TIL._AC_US40_.jpg" alt=""/>
                        <img className='productimg' src="https://m.media-amazon.com/images/I/4186yrrWE9L._AC_US40_.jpg" alt=""/>
                        <img className='productimg' src="https://m.media-amazon.com/images/I/31zeWkqI+dL._AC_US40_.jpg" alt=""/>
                        <img className='productimg' src="https://m.media-amazon.com/images/I/11BY4OAqtgL._AC_US40_.jpg" alt=""/>
        </div>
        <div className="card" style={{width: "18rem",margin: "10px 10px"}}>
            
                <div className='pdright'>
                    <img src={product.imgSrc} className="card-img-top" alt={product.title} />
                    <div className="card-body">
                        <p className="card-text">Name : {product.title}</p>
                        <p className="card-text">Price : ${product.price}</p>
                        <AddToCart product={product}/>
                    </div>
                </div>

        
        </div>
    </div>
    </>

  )
}

export default ProductDetailPage
