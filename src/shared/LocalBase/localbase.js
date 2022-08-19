import Localbase from 'localbase'; // https://github.com/dannyconnell/localbase

const db = new Localbase('db');

const LIST_TITLES = { // Add all lists to be stored in IndexedDB localbase here
    expenses: "expenses",
    budgetExpenses: "budgetExpenses",
    budgetIncome: "budgetIncome",
}

export { db, LIST_TITLES }
