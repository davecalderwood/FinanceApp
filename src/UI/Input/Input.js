import React, { useReducer } from 'react';
import { validate } from '../../shared/Utils/validators';
import classes from './Input.module.scss';

const inputReducer = (state, action) => {
    switch(action.type) {
        case 'CHANGE':
            return {
                ...state,
                value: action.val,
                isValid: validate(action.val, action.validators)
            }
        case 'TOUCH':
            return {
                ...state,
                isTouched: true
            }
        default:
            return state;
    }
};

const Input = (props) => {
    const [inputState, dispatch] = useReducer(inputReducer, {
        value: '', 
        isValid: false, 
        isTouched: false
    });

    const changeHandler = event => {
        dispatch({type: 'CHANGE', val: event.target.value, validators: props.validators});
    }

    const touchHandler = () => {
        dispatch({type: 'TOUCH'})
    }

    const element = props.element === 'input' ? 
        <input 
            id={props.id} 
            type={props.type}
            placeholder={props.placeholder}
            onChange={changeHandler}
            onBlur={touchHandler}
            value={inputState.value} /> : 
        <textarea 
            id={props.id} 
            rows={props.rows || 3}
            type={props.type}
            placeholder={props.placeholder}
            onChange={changeHandler}
            onBlur={touchHandler}
            value={inputState.value} />;

    const inputValidClass = !inputState.isValid && inputState.isTouched ? classes.formControlInvalid : '';

    return (
        <div className={`${classes.formControl} ${inputValidClass}`}>
            <label htmlFor={props.id}>{props.label}</label>
            {element}
            {!inputState.isValid && inputState.isTouched && <p>{props.errorText}</p>}
        </div>
    );
}
 
export default Input;