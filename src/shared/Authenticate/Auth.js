import React, { useState, useContext } from 'react';
import { AuthContext } from '../Context/auth-context';
import Input from '../../UI/Input/Input';
import { useNavigate } from 'react-router-dom';
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/Utils/validators';
import useForm from '../Hooks/useForm';

import classes from './Auth.module.scss';
import Button from '../../UI/Button/Button';
import Card from '../../UI/Card/Card';

const AuthenticateUser = () => {
    const auth = useContext(AuthContext);
    let navigate = useNavigate();

    const [isLoginMode, setIsLoginMode] = useState(true);

    const [formState, inputHandler, setFormData] = useForm({
        email: {
            value: '',
            isValid: false
        },
        password: {
            value: '',
            isValid: false
        },
    }, false);

    const authSubmitHandler = event => {
        event.preventDefault();
        auth.login();
        navigate('/', { replace: true });
    }

    // Example of React Virtual DOM
    // If you have multiple state changes in the same synchronus code block it will schedule them for updates and run them all at once, rather than one at a time
    // That prevents unneccesary re render cycles and aids system performance
    // NOTE: You do not have to do anything to do this, this was just an explanation of how the ReactDOM works behind the scenes
    const switchModeHandler = () => {
        // update behind the form data based on mode
        // if we are NOT in the login form ie. in the sign up form, then the form validity will check if email and password are valid while the name field will be set to undefined
        if (!isLoginMode) {
            setFormData({
                // Copy existing formState on switch and set name to undefined
                ...formState.inputs,
                name: undefined
            }, formState.inputs.email.isValid && formState.inputs.password.isValid);
        } else {
            setFormData({
                ...formState.inputs,
                name: {
                    value: '',
                    isValid: false
                }
            }, false);
        }
        // Toggle form
        setIsLoginMode(prevMode => !prevMode);
    }

    return (
        <Card>
            <h2 className={classes.authentication}>Login Required</h2>
            <hr />
            <form className={classes.form} onSubmit={authSubmitHandler}>
                {!isLoginMode &&
                    <Input
                        element="input"
                        id="name"
                        type="text"
                        label="Name"
                        validators={[VALIDATOR_REQUIRE()]}
                        onInput={inputHandler}
                        errorText="Enter a name" />
                }

                <Input
                    id="email"
                    element="input"
                    type="email"
                    label="Email Address"
                    placeholder="Enter Email"
                    validators={[VALIDATOR_EMAIL()]}
                    onInput={inputHandler}
                    errorText="Please Enter a Valid Email Address" />

                <Input
                    id="password"
                    element="password"
                    type="password"
                    label="Password"
                    placeholder="Enter Password"
                    validators={[VALIDATOR_MINLENGTH(5)]}
                    onInput={inputHandler}
                    errorText="Password is required" />

                <div className={classes.buttonBar}>
                    <Button type="submit" disabled={!formState.isValid}>
                        {isLoginMode ? 'LOGIN' : 'SIGN UP'}
                    </Button>
                </div>

            </form>

            <Button inverse onClick={switchModeHandler}>
                SWITCH TO {isLoginMode ? 'SIGN UP' : 'LOGIN'}
            </Button>
        </Card>
    );
}

export default AuthenticateUser;