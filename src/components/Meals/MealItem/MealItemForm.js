import React, { useRef, useState } from 'react';
import { Input } from '../../UI/Input';
import styles from './MealItemform.module.css';

export const MealItemForm = (props) => {
    const amountInputRef = useRef();
    const [amountIsValid, setAmountIsValid] = useState(true);

    const submitBtnHandler = (event) => {
        event.preventDefault();
        const enteredAmt = amountInputRef.current.value;
        const enteredAmtNumber = +enteredAmt;

        if(enteredAmt.trim().length === 0 || enteredAmtNumber.value < 0 || enteredAmtNumber > 5){
            setAmountIsValid(false);
            return;
        }
        props.onAddToCart(enteredAmtNumber);
    }

    return (
        <form className={styles.form} onSubmit={submitBtnHandler}>
            <Input
                ref={amountInputRef}
                label={'Amount'} input={{
                id: 'amount_'+ props.id,
                type: 'number',
                min: '1',
                max: '5',
                defaultValue: '1'
            }}></Input>
            {!amountIsValid && <p>Enter valid amount</p>}
            <button>+ Add</button>
        </form>
    )
}
