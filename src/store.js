// Create the store, which is the entire state of our application

import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/cart/cartSlice'

export default store = configureStore({
  reducer: {
    cart: cartReducer
  }
})
