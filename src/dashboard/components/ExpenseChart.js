import React, { useState } from 'react';
import Card from '../../UI/Card/Card';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import MOCK_DATA from '../../MOCK_DATA.json';
import Select from 'react-select';

const ExpenseChart = () => {
    const [selectedOption, setSelectedOption] = useState('ALL');

    const dropdownSelectHandler = (selectedOption) => {
        setSelectedOption(selectedOption);
    };

    const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400},{name: 'Page B', uv: 200, pv: 1200, amt: 1200}];
    
    const expenses = MOCK_DATA.filter(i => i.Category !== 'Savings');
    const savings = MOCK_DATA.filter(i => i.Category === 'Savings');

    let sortedExpenses = expenses.sort((a, b) => new Date(...a.Date.split('/').reverse()) - new Date(...b.Date.split('/').reverse()));

    var parsed = JSON.parse(JSON.stringify(sortedExpenses));
    // parsed.map(item => item.Date.slice(-4));
    const dates = parsed.filter((d) => d.Date.slice(-4) === '2022');
    const months = parsed.filter((d) => d.Date).map(i => i.Date.slice(0, 2));


    const renderLineChart = (
        <LineChart width={600} height={300} data={sortedExpenses}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
      </LineChart>
    );

    return ( 
        <Card>
        <p>Expense Chart</p>
        {renderLineChart}
        </Card>
    );
}
 
export default ExpenseChart;