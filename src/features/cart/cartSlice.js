import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems: [],
  totalBillPrice: 0,
  totalItemsInCart: 0,
  isLoading: true
}

const cartSlice = createSlice({
  name: 'cart',
  initialState
})

export default cartSlice.reducer
