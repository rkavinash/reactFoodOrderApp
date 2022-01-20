import React, { Fragment } from 'react';
import styles from './Header.module.css';
import mealsImage from '../../assets/meals.jpeg';
import { HeaderCartBtn } from './HeaderCartBtn';

export const Header = (props) => {
    return (
        <Fragment>
            <header className={styles.header}>
                <h1>ARK ReactMeals</h1>
                <HeaderCartBtn onClickBtn={props.showCart}></HeaderCartBtn>
            </header>
            <div className={styles['main-image']}>
                <img src={mealsImage} alt='header meals'></img>
            </div>
        </Fragment>
    )
}
