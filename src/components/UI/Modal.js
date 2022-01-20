import ReactDOM from 'react-dom';
import React, { Fragment } from 'react';
import styles from './Modal.module.css';

const Backdrop = (props) => {
    return (<div className={styles.backdrop} onClick={props.onBackDropPress}></div>);
}

const ModalOverlay = (props) => {
    return (<div className={styles.modal}>
                <div className={styles.content}>{props.children}</div>
            </div>);
}

export const Modal = (props) => {
    const portalElement =  document.getElementById('overlays');
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onBackDropPress={props.onpress}/>, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </Fragment>
    );
}
