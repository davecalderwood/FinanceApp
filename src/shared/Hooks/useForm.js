import { useReducer, useCallback } from 'react';

// useForm is not a React Hook, this is a custom one I built to show how to create and use custom hooks
// This app has an "Add Expense" and "Edit Expense" modal which will both behave very similarly
// This custom hook would prevent re-writing lots of code that is identical
// The useForm will have two items to destructure, initialInputs and initialFormValidity

// useReducer is an alternative to useState. Accepts a reducer of type (state, action) => newState, 
// and returns the current state paired with a dispatch method.
const formReducer = (state, action) => {
    switch (action.type) {
        case 'INPUT_CHANGE':
            let formIsValid = true;
            for (const inputId in state.inputs) {
                // If input is undefined then we can skip this and move to the next part of the form
                // Look at Auth.js to see this in action, switching between login and signup mode will change the form validity requirement checks
                if (!state.inputs[inputId]) {
                    continue;
                }
                if (inputId === action.inputId) {
                    formIsValid = formIsValid && action.isValid;
                } else {
                    formIsValid = formIsValid && state.inputs[inputId].isValid;
                }
            }
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.inputId]: { value: action.value, isValid: action.isValid }
                },
                isValid: formIsValid
            }
        case 'SET_DATA':
            return {
                inputs: action.inputs,
                isValid: action.formIsValid
            };
        default:
            return state;
    }
};

const useForm = (initialInputs, initialFormValidity) => {
    const [formState, dispatch] = useReducer(formReducer, {
        inputs: initialInputs,
        isValid: initialFormValidity
    });

    const inputHandler = useCallback((id, value, isValid) => {
        dispatch({ type: 'INPUT_CHANGE', value: value, isValid: isValid, inputId: id })
    }, []);

    const setFormData = useCallback((inputData, formValidity) => {
        dispatch({
            type: 'SET_DATA',
            inputs: inputData,
            formIsValid: formValidity
        });
    }, []);

    return [formState, inputHandler, setFormData];
}

export default useForm;
