import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';
import CartItem from './CartItem';
 const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});
export default store
