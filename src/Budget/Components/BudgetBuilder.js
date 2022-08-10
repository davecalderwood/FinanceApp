import React, { useState } from 'react';
import useForm from '../../shared/Hooks/useForm';
import { VALIDATOR_MIN } from '../../shared/Utils/validators';
import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';
import Card from '../../UI/Card/Card';

import classes from '../Styles/BudgetBuilder.module.scss';
import ExpenseForBudgetBuilder from './ExpenseForBudgetBuilder';

const BudgetBuilder = (props) => {
    const [showAdd, setShowAdd] = useState(false);
    const [formState, inputHandler] = useForm({
        expectedTakeHome: {
            value: '',
            isValid: false
        },
        expectedExpense: {
            value: "",
            isValid: false
        },
    }, false);

    const formSubmitHandler = () => {
    }

    const addNewExpenseHandler = () => {
        setShowAdd(!showAdd);
    }

    const addNewExpenseForm = showAdd && <Card>
        <div className={classes.expenseItem}>
            <ExpenseForBudgetBuilder />
        </div>
    </Card>

    return (
        <>
            <div className={classes.budgetBuilderBody}>
                <div className={classes.income}>
                    <h4 className={classes.title}>Monthly Income</h4>
                </div>

                <div className={classes.expenses}>
                    <h4 className={classes.title}>Monthly Expenses</h4>
                    <Button type="button" label="Add Expense" onClick={addNewExpenseHandler}>+</Button>
                    {addNewExpenseForm}
                </div>


                {/* <form onSubmit={formSubmitHandler} className={classes.budgetBuilder}>
                    <Input
                        id="expectedTakeHome"
                        element="input"
                        type="number"
                        label="Income"
                        placeholder="Expected Take Home Pay (monthly)"
                        validators={[VALIDATOR_MIN(0)]}
                        onInput={inputHandler}
                        errorText="Please Enter a Valid Number" />
                </form>
                <Button type="button" label="Add Expense" onClick={addNewExpenseHandler}>+</Button> */}
            </div>

        </>
    );
}

export default BudgetBuilder;