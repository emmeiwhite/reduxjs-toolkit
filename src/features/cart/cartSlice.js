import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems: [],
  totalBillPrice: 0,
  totalItemsInCart: 0,
  isLoading: true
}

createSlice({
  name: 'cart',
  initialState
})

export default cartSlice.reducer
