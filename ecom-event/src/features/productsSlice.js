import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Fetch products from API
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await fetch('https://run.mocky.io/v3/e8bde99b-0f4d-48eb-9176-dc5a3b3f9d89');
  const data = await response.json();
  return data;
});

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    selectedCategories: {
      electronics: true,
      shoes: true,
      toys: true,
      accessories: true,
    },
    sortOrder: 'asc',
    searchQuery: '',
    selectedProduct:''
  },
  reducers: {
    setSortOrder: (state, action) => {
      state.sortOrder = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    toggleCategory: (state, action) => {
      const category = action.payload;
      state.selectedCategories[category] = !state.selectedCategories[category];
    },
    setSelectedProduct:(state,action) =>{
      state.selectedProduct = action.payload;
      console.log(state.selectedProduct,"selected")
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});

export const { setSortOrder, setSearchQuery, toggleCategory,setSelectedProduct } = productsSlice.actions;
export default productsSlice.reducer;
