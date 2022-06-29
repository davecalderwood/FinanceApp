import React, { useReducer, useEffect } from 'react';
import { validate } from '../../shared/Utils/validators';
import classes from './Input.module.scss';

// This is a very non-specific custom component that is meant to be highly re-usable anywhere it might be needed
// This input would have several states attached to it, so instead I used useReducer here
// I don't want to check for a change and touch individually so you can put them both inside a reducer
const inputReducer = (state, action) => {
    switch (action.type) {
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
        value: props.value || '',
        isValid: false,
        isTouched: props.valid || false
    });

    const { id, onInput } = props;
    const { value, isValid } = inputState;

    useEffect(() => {
        onInput(id, value, isValid)
    }, [id, value, isValid, onInput])

    const changeHandler = event => {
        dispatch({ type: 'CHANGE', val: event.target.value, validators: props.validators });
    }

    const touchHandler = () => {
        dispatch({ type: 'TOUCH' })
    }

    // In the instance of each one you may add an element tag to declare what type of input it should be
    const element =
        props.element === 'input' ? (
            <input
                id={props.id}
                type={props.type}
                placeholder={props.placeholder}
                onChange={changeHandler}
                onBlur={touchHandler}
                value={inputState.value}
            />
        ) : (
            <textarea
                id={props.id}
                rows={props.rows || 3}
                onChange={changeHandler}
                onBlur={touchHandler}
                value={inputState.value}
            />
        );

    // Conditional styling for error handling
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