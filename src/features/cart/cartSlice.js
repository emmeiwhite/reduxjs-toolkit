import { createSlice } from '@reduxjs/toolkit'
import cartItems from '../../cartItems'

const initialState = {
  cartItems: cartItems,
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
