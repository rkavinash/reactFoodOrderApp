import React from 'react';
import styles from './Input.module.css'

export const Input = React.forwardRef((props, fwdref) => {
    return (
        <div className={styles.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input ref={fwdref} {...props.input}></input>
        </div>
    )
});
