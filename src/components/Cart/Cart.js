import React, { useContext } from 'react';
import CartContext from '../../store/cart-context';
import { Modal } from '../UI/Modal';
import styles from './Cart.module.css';
import CartItem from './CartItem';

export const Cart = (props) => {
    const cartCtx = useContext(CartContext);

    const removeItemHandler = (id) => {
        cartCtx.removeItem(id);
    }

    const addItemHandler = (item) => {
        console.log('add cart item', item);
        cartCtx.addItem({...item, amount: 1 });
    }

    const cartItems = (
                    <ul className={styles['cart-items']}>
                        {cartCtx.items.map((item)=>
                            (<CartItem key={item.id} item={item} onRemove={removeItemHandler.bind(null, item.id)} onAdd={addItemHandler.bind(null, item)}></CartItem>))}
                    </ul>
                );
    return (
        <Modal className={styles['cart-items']} onpress={props.hideCart}>
            {cartItems}
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>{cartCtx.totalAmount}</span>
            </div>
            <div className={styles.actions}>
                <button className={styles['button--alt']} onClick={props.hideCart}>Close</button>
                <button className={styles.button}>Order</button>
            </div>
        </Modal>
    )
}
