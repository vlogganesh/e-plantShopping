import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
    totalQty:0
  },
  reducers: {
    addItem: (state, action) => {
        console.log("payload",action.payload)
        const { name, image, cost } = action.payload;
        const existingItem = state.items.find(item => item.name === name);
        console.log("existingItem",existingItem)
        if (existingItem) {
            existingItem.quantity++;
        } else {
            state.items.push({ name, image, cost, quantity: 1 });
        }
        state.totalQty++;
    },
    removeItem: (state, action) => {
        const itemToRemove = state.items.find(item => item.name === action.payload);
        if (itemToRemove) {
            // Decrement totalQty by the quantity of the item being removed
            state.totalQty -= itemToRemove.quantity;

            // Remove the item from the cart
            state.items = state.items.filter(item => item.name !== action.payload);
        }
    },
    updateQuantity: (state, action) => {
        const { name, quantity } = action.payload;
        const itemToUpdate = state.items.find(item => item.name === name);
        if (itemToUpdate) {
            const qtyDifference = quantity - itemToUpdate.quantity;
            itemToUpdate.quantity = quantity;
            state.totalQty += qtyDifference;
        }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
