import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems: [],
  totalBillPrice: 0,
  totalItemsInCart: 5,
  isLoading: true
}

const cartSlice = createSlice({
  name: 'cart',
  initialState
})

// console.log(cartSlice)

export default cartSlice.reducer
