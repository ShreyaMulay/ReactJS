import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

function Products({searchQuery}) {
  let [products, setProducts] = useState([]);

    // filtering products

    const [selectedCategories, setSelectedCategories] = useState({
        electronics: true,
        shoes: true,
        toys: true,
        accessories: true,
      });
  //sorting
  const [sortOrder, setSortOrder] = useState("asc"); // State for sorting order

    useEffect(()=>{
    async function getAllProducts() {
        const resp = await fetch('https://run.mocky.io/v3/e8bde99b-0f4d-48eb-9176-dc5a3b3f9d89');
        const data = await resp.json();
        setProducts(data)
    }
    getAllProducts()
  }, [products]);

  //search product
  products = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );



   // Handle Checkbox Change
   const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setSelectedCategories((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

    // Filter products based on selected categories
    products = products.filter((product) => {
        return selectedCategories[product.category]
    });
    
    // console.log("filter products ",products)
    // Sort filtered products based on selected order
    products.sort((a, b) => {
    if (sortOrder === "asc") {
      return a.price - b.price; // Change 'price' to the attribute you want to sort by
    } else {
      return b.price - a.price; // Change 'price' to the attribute you want to sort by
    }
  });
   // Handle sorting order change
   const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };


  return (
    
    <div className="productcards">
        <div className="left checkbox-container">
       
          <label className="cheeck">
            <input
              type="checkbox"
              name="electronics"
              checked={selectedCategories.electronics}
              onChange={handleCheckboxChange}
            />
            Electronics
          </label>
          <label  className="cheeck">
            <input
              type="checkbox"
              name="shoes"
              checked={selectedCategories.shoes}
              onChange={handleCheckboxChange}
            />
            Shoes
          </label>
          <label  className="cheeck" >
            <input
              type="checkbox"
              name="toys"
              checked={selectedCategories.toys}
              onChange={handleCheckboxChange}
            />
            Toys
          </label>
          <label className="cheeck">
            <input
              type="checkbox"
              name="accessories"
              checked={selectedCategories.accessories}
              onChange={handleCheckboxChange}
            />
            Accessories
          </label>
        </div>
        <div className="right">
              <div className="r1">
                <label className="sort">
                  Sort by Price:
                  <select onChange={handleSortChange} value={sortOrder}>
                    <option value="asc">Low to High</option>
                    <option value="desc">High to Low</option>
                  </select>
                </label>
              </div>
                
              <div className="r2">                {
                products.map((product,index) => 
                    <ProductCard product={product} key={index}/>
                )}
                {
                    searchQuery &&  products.length === 0 ? 
                    <div class="alert alert-info" role="alert" style={{margin: "auto"}}>
                        No Product Found 😟
                    </div>
                    :<></>
                }
              </div>

            
        </div>

        

    </div>
  );
}
  
// function add() {return 3+2};
// function add(a,b) {return a+b}; //parameters
  
export default Products;
  
// Javascript XML 

// if i want the data to be rendered 
// 1) Rerender
// 2) Stop for the data *


// state

// when set they cause rerender 
// for setting a state variable you are provided with a setter function 
// How do I create one ?
// you have something known as hooks  = Helper function (which would be used to do the same thing again and again)
// useState hook to create a state variable


// useEffect
// I will provide you a functin and number of times this  function is called  can be controlled

// function is called only once and not on every rerender if you pass [] dependency array 

// mounting 
// rerendering | rendering