import React, { useState, useEffect } from 'react';
import useForm from '../../shared/Hooks/useForm';
import { VALIDATOR_MIN } from '../../shared/Utils/validators';
import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';
import Card from '../../UI/Card/Card';

import classes from '../Styles/BudgetBuilder.module.scss';
import ExpenseForBudgetBuilder from './ExpenseForBudgetBuilder';
import { db, LIST_TITLES } from '../../shared/LocalBase/localbase';
import BudgetExpenseList from './BudgetExpenseList';
import IncomeForBudgetBuilder from './IncomeForBudgetBuilder';
import BudgetIncomeList from './BudgetIncomeList';

const BudgetBuilder = (props) => {
    const [showModal, setShowModal] = useState(false);
    const [showIncomeModal, setShowIncomeModal] = useState(false);

    const [budgetData, setBudgetData] = useState([]);
    const [incomeData, setIncomeData] = useState([]);

    const [totalExpenses, setTotalExpenses] = useState(0);
    const [totalIncome, setTotalIncome] = useState(0);

    // getTotalSumFromExpenses is written here and called in the useEffect to avoid the issue 
    // `cannot update a component while rendering a different component`
    // https://github.com/facebook/react/issues/18178
    const getTotalSumFromExpenses = (totalExpenseValueFromChild) => {
        setTotalExpenses(totalExpenseValueFromChild);
    };
    const getTotalSumFromIncome = (totalExpenseValueFromChild) => {
        setTotalIncome(totalExpenseValueFromChild);
    };

    useEffect(() => {
        const getData = async () => {
            await db.collection(LIST_TITLES.budgetExpenses).get().then(expenses => {
                setBudgetData(expenses);
            });
            await db.collection(LIST_TITLES.budgetIncome).get().then(income => {
                setIncomeData(income);
            });
        }
        getTotalSumFromExpenses();
        getTotalSumFromIncome();
        getData();
    }, [setBudgetData, setIncomeData]);


    const showModalHanlder = () => {
        setShowModal(true);
    }
    const hideModalHanlder = () => {
        setShowModal(false);
    }

    const showIncomeModalHanlder = () => {
        setShowIncomeModal(true);
    }
    const hideIncomeModalHanlder = () => {
        setShowIncomeModal(false);
    }

    // This is an example of how to pass data from the child to the parent.
    // BudgetBuilder is the parent, BudgetExpenseList is the child.
    // getTotalSumFromExpenses is my function I define in the parent, 
    // setTotalValueFromChild is the alias used to call the getTotalSumFromExpenses function
    // Then in the child props.setTotalValueFromChild(...); will be used to call the parent function
    const budgetExpenseData = <BudgetExpenseList items={budgetData} setTotalValueFromChild={getTotalSumFromExpenses} />
    const incomeDataList = <BudgetIncomeList items={incomeData} setTotalValueFromChild={getTotalSumFromIncome} />

    return (
        <div className={classes.budgetBuilder}>
            <div className={classes.budgetBox}>
                <div className={classes.budgetHeader}>
                    <Button onClick={showModalHanlder}>Add Budget Expense</Button>
                    <span>Total: {totalExpenses}</span>
                </div>

                {showModal && <ExpenseForBudgetBuilder onClose={hideModalHanlder} />}

                <ul className={classes.expenseList}>
                    {budgetExpenseData}
                </ul>
            </div>

            <div className={classes.budgetBox}>
                <div className={classes.budgetHeader}>
                    <Button onClick={showIncomeModalHanlder}>Add Monthly Income</Button>
                    <span>Total: {totalIncome}</span>
                </div>

                {showIncomeModal && <IncomeForBudgetBuilder onClose={hideIncomeModalHanlder} />}

                <ul className={classes.expenseList}>
                    {incomeDataList}
                </ul>

            </div>


        </div>
    );
}

export default BudgetBuilder;