import React, { useContext } from 'react'
import CartContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';
import styles from './HeaderCartBtn.module.css';

export const HeaderCartBtn = (props) => {
    const cartctx = useContext(CartContext);

    const noOfCartItems = cartctx.items.reduce((curNo, item) => {
        return curNo + item.amount
    }, 0);
    return (
        <button className={styles.button} onClick={props.onClickBtn}>
            <span className={styles.icon}>
                <CartIcon/>
            </span>
            <span>Your Cart</span>
            <span className={styles.badge}>{noOfCartItems}</span>
        </button>
    )
}
