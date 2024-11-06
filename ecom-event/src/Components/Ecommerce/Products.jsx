import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts, setSortOrder, toggleCategory } from "../../features/productsSlice";
import ProductCard from "./ProductCard";

function Products({ searchQuery }) {
  const dispatch = useDispatch();
  const { items, selectedCategories, sortOrder } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Filter products by search query
  let filteredProducts = items.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Filter products by selected categories
  filteredProducts = filteredProducts.filter((product) => selectedCategories[product.category]);

  // Sort products
  filteredProducts.sort((a, b) => {
    return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
  });

  // Handle sorting order change
  const handleSortChange = (event) => {
    dispatch(setSortOrder(event.target.value));
  };

  // Handle checkbox change
  const handleCheckboxChange = (event) => {
    dispatch(toggleCategory(event.target.name));
  };

  return (
    <div className="productcards">
      <div className="left checkbox-container">
        {Object.keys(selectedCategories).map((category) => (
          <label key={category} className="cheeck">
            <input
              type="checkbox"
              name={category}
              checked={selectedCategories[category]}
              onChange={handleCheckboxChange}
            />
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </label>
        ))}
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
        <div className="r2">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => <ProductCard product={product} key={index} />)
          ) : (
            <div className="alert alert-info" role="alert" style={{ margin: "auto" }}>
              No Product Found 😟
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Products;
