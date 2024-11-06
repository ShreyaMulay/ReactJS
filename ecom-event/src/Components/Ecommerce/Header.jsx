import React from 'react'
import { Link } from 'react-router-dom'
// import { CartContext } from '../App'

import { useSelector } from 'react-redux';


const Header = ({searchQuery,setSearchQuery}) => {
    const cart = useSelector((state) => state.cart);
    console.log("cart ",cart)

    // const {cart} = useContext(CartContext)
    const getTotalQuantity = () => {
        return Object.values(cart).reduce((total, item) => total + item.quantity, 0);
      };

    const handleSearchChange = (e)=>{
        setSearchQuery(e.target.value);
    }
    
      
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">All Products</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    {/* <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="#">All Products</Link>
                    </li> */}
                    <li className="nav-item">
                   
                        <Link className="nav-link" to="/cart"> 
                            <button type="button" className="btn btn-primary position-relative">
                            Cart
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    {getTotalQuantity()}+
                                    <span className="visually-hidden">unread messages</span>
                                </span>
                            </button>
                            </Link>
                    </li>
                </ul>
                <form className="d-flex" role="search" >
                    <input className="form-control me-2" type="search" placeholder="Search here..." aria-label="Search"   value={searchQuery} onChange={handleSearchChange}/>
                    {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
                </form>
                </div>
            </div>
        </nav>

        <div className="banner">
        <div id="carouselExampleCaptions" className="carousel slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active" style={{height: "400px"}}>
                <img src="https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg" className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                </div>
                </div>
                <div className="carousel-item" style={{height: "400px"}}>
                <img src="https://m.media-amazon.com/images/I/81KkrQWEHIL._SX3000_.jpg" className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>Some representative placeholder content for the second slide.</p>
                </div>
                </div>
                <div className="carousel-item" style={{height: "400px"}}>
                <img src="https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg" className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>Some representative placeholder content for the third slide.</p>
                </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
        </div>
      
    </div>
  )
}

export default Header
