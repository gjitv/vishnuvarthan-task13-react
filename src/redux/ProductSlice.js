import axios from "axios"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState={
    loading:false,
    products:[],
    error:""
}

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    return await axios
      .get("http://localhost:8000/products")
      .then(response => response.data)
  })

  export const addToProducts = createAsyncThunk('products/addToProducts', async (product) => {
    return await axios
      .post("http://localhost:8000/products",product)
  })

  export const removeFromProducts = createAsyncThunk('products/removeFromProducts', async (product) => {
    return await axios
      .delete(`http://localhost:8000/products/${product.id}`)
  })

  export const editProduct = createAsyncThunk('products/editProduct', async (product) => {
    return await axios
      .put(`http://localhost:8000/products/${product.id}`, product)
  })

  const productSlice = createSlice({
    name: 'products',
    initialState,
    extraReducers: builder => {
      builder.addCase(fetchProducts.pending, state => {
        state.loading = true
      })
      builder.addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false
        state.products = action.payload
        state.error = ''
      })
      builder.addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false
        state.products = []
        state.error = action.error.message
      })

      // add to products

      builder.addCase(addToProducts.pending, state => {
        state.loading = true
      })
      builder.addCase(addToProducts.fulfilled, (state, action) => {
        state.loading = false
        state.products = action.payload
        state.error = ''
      })
      builder.addCase(addToProducts.rejected, (state, action) => {
        state.loading = false
        state.products = []
        state.error = action.error.message
      })

      //remove from products
      builder.addCase(removeFromProducts.pending, (state, id) => {
        state.loading = true
      })
      builder.addCase(removeFromProducts.fulfilled, (state, id) => {
        state.loading = false
        state.products= state.products.filter((item)=> item.id !==(id.meta.arg.id))
        state.error = ''
      })
      builder.addCase(removeFromProducts.rejected, (state, action) => {
        state.loading = false
        state.products = []
        state.error = action.error.message
      })
    //Edit product

    builder.addCase(editProduct.pending, (state, id) => {
      state.loading = true
    })
    builder.addCase(editProduct.fulfilled, (state, action) => {
      state.loading = false
      state.products= action.payload
      state.error = ''
    })
    builder.addCase(editProduct.rejected, (state, action) => {
      state.loading = false
      state.products = []
      state.error = action.error.message
    })
  
    }
  })
  
  export default productSlice.reducer