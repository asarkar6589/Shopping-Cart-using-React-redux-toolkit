import { createReducer } from "@reduxjs/toolkit";

export const cartReducer = createReducer({
    // initial state.
    cartItems: [],
    subTotal: 0,
    // shipping: 0,
    tax: 0,
    total: 0,
}, {
    // Here we have to make cases.
    addToCart: (state, action) => {
        const item = action.payload; // All the details of item is checked.

        // No lets say we have added mackbook in the cart. So if we want to add it to the cart again, then it's quantity should be increased but it should not be added again into the cart. So for that, we have to give another condition.

        // Basically here we are checking if the product that is there in the cart is same as the product we want to add to the cart
        const isItemPresent = state.cartItems.find((i) => {
            return i.id === item.id;
        });

        if (isItemPresent) {
            state.cartItems.forEach((i) => {
                if (i.id === item.id) {
                    i.quantity += 1;
                }
            })
        }
        else {
            state.cartItems.push(item);
        }
    },

    decrement: (state, action) => {
        const itemId = action.payload; // Here we are directly getting the id because in the payload, we have given 
        const item = state.cartItems.find((i) => {
            return i.id === itemId;
        });

        if (item.quantity > 1) {
            state.cartItems.forEach((i) => {
                if (i.id === item.id) {
                    i.quantity -= 1;
                }
            })
        }

    },

    deleteFromCart: (state, action) => {
        state.cartItems = state.cartItems.filter((i) => {
            return i.id !== action.payload;
        });
        // All those items which will not be deleted will come in the cartItems array.
    },

    calculatePrice: (state) => {
        let sum = 0;

        state.cartItems.forEach((i) => {
            sum += i.price * i.quantity;
        });

        state.subTotal = sum;
        // state.shipping = state.subTotal > 1000 ? 0 : 200;
        state.tax = +(state.subTotal * 0.18).toFixed(); // toFixed() method will return string, but the reason behind using it is that, tax may be a perfect number or a decimal number. Thats why we have used this. But the problem is, it returns a string. So to make it a integer, we will append '+' in front of it.
        state.total = state.subTotal + state.tax;
    }
});
