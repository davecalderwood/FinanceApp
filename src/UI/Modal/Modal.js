import React from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.css';

// Look at index.html next to the root element, there you will see an overlays
// React Portal will take this modal and push it right next to the root element
// This makes debugging much easier inside any modal and 

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClose}></div>
}
// {props.children} inside the modal will allow this component to stay highly customizable
// And each modal instance will behave the same way
const ModalOverlay = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}

const portalElement = document.getElementById('overlays');

const Modal = (props) => {

    return (
        <>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </>
    );
}

export default Modal;