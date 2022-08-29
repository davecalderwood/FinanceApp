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

    useEffect(() => {
        const getData = async () => {
            await db.collection(LIST_TITLES.budgetExpenses).get().then(expenses => {
                setBudgetData(expenses);
            });
            await db.collection(LIST_TITLES.budgetIncome).get().then(income => {
                setIncomeData(income);
            });
        }
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

    const budgetExpenseData = <BudgetExpenseList items={budgetData} />
    const incomeDataList = <BudgetIncomeList items={incomeData} />

    return (
        <div className={classes.budgetBuilder}>
            <div className={classes.budgetBox}>
                <div className={classes.budgetHeader}>
                    <Button onClick={showModalHanlder}>Add Budget Expense</Button>
                    <span>Total: </span>
                </div>

                {showModal && <ExpenseForBudgetBuilder onClose={hideModalHanlder} />}

                <ul className={classes.expenseList}>
                    {budgetExpenseData}
                </ul>
            </div>

            <div className={classes.budgetBox}>
                <div className={classes.budgetHeader}>
                    <Button onClick={showIncomeModalHanlder}>Add Monthly Income</Button>
                    <span>Total: </span>
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