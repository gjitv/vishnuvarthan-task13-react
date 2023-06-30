import axios from "axios"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


const initialState={
    loading:false,
    cart:[],
    error:""
}

export const fetchCart = createAsyncThunk('cart/fetchCart', async () => {
    return await axios
      .get("http://localhost:8000/cart")
      .then(response => response.data)
  })

  export const addToCart = createAsyncThunk('cart/addToCart', async (product) => {
    return await axios
      .post("http://localhost:8000/cart",product)
  })

 
  export const removeFromCart = createAsyncThunk('cart/removeFromCart', async (product) => {
    return await axios
      .delete(`http://localhost:8000/cart/${product.id}`)
      .then(removeFromCart.fulfilled(product.id))
  })

  const cartSlice = createSlice({
    name: 'cart',
    initialState,
    extraReducers: builder => {
      builder.addCase(fetchCart.pending, state => {
        state.loading = true
      })
      builder.addCase(fetchCart.fulfilled, (state, action) => {
        state.loading = false
        state.cart = action.payload
        state.error = ''
      })
      builder.addCase(fetchCart.rejected, (state, action) => {
        state.loading = false
        state.cart = []
        state.error = action.error.message
      })

      //add to cart

    
      builder.addCase(addToCart.pending, state => {
        state.loading = true
      })
      builder.addCase(addToCart.fulfilled, (state, action) => {
        state.loading = false
        state.cart = action.payload
        state.error = ''
      })
      builder.addCase(addToCart.rejected, (state, action) => {
        state.loading = false
        state.cart = []
        state.error = action.error.message
      })

      // delete from cart

      builder.addCase(removeFromCart.pending, (state, id) => {
        state.loading = true
      })
      builder.addCase(removeFromCart.fulfilled, (state, id) => {
        state.loading = false
        state.cart=state.cart.filter((item)=> item.id !==(id.meta.arg.id))
        state.error = ''
      })
      builder.addCase(removeFromCart.rejected, (state, action) => {
        state.loading = false
        state.cart = []
        state.error = action.error.message
      })
    }
  })
  
  export default cartSlice.reducer