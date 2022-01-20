import React, { useReducer } from 'react'
import CartContext from './cart-context'

const CartReducer = (state, action) => {
    if(action.type === 'ADD_TO_CART') {
        const updatedTotalAmt = state.totalAmount + action.item.amount * action.item.price;
        let updatedItems;

        var itemFound = false;
        for (let i = 0; i < state.items.length; i++) {
            const item = state.items[i];
            if(item.id === action.item.id) {
                itemFound = true;
                item.amount += action.item.amount;
            }
        }
        updatedItems = [...state.items];
        if(!itemFound) {
            updatedItems = state.items.concat(action.item);
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmt
        }
    }

    if(action.type === 'REMOVE_FROM_CART') {
        // TODO
        // const updatedTotalAmt = state.totalAmount - action.item.price;
        let updatedItems;
        let itemPrice;
        console.log('action id = ', state, action);
        state.items.map((item) => {
            if(item.id === action.id) {
                console.log('id found ', item.id, action.id);
                if(item.id === 0){
                    updatedItems = state.items.filter(i => item.id !== action.id);
                } else {
                    updatedItems =  state.items;
                }
                item.amount -= 1;
                itemPrice = item.price;
                itemFound = true;
            }
            // updatedItems =  state.items;
            console.log('updated items = ', updatedItems);
            return updatedItems;
        });

        const updatedTotalAmt = state.totalAmount - itemPrice;

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmt
        }

    }
}

export const CartProvider = (props) => {

    const cartInitialState = {
        items: [],
        totalAmount: 0
    };
    const [cartState, dispatchCartAction] = useReducer(CartReducer, cartInitialState);

    const addItemHandler = (item) => {
        dispatchCartAction({type: 'ADD_TO_CART', item: item});
    }

    const removeItemHandler = (id) => {
        dispatchCartAction({type: 'REMOVE_FROM_CART', id: id});
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    }
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}
