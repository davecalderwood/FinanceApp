import React, { useState } from 'react';
import Card from '../../UI/Card/Card';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

const ExpenseChart = (props) => {

    const renderLineChart = (
        <LineChart width={1000} height={300} data={props.total} aspect={3}>
            <Line type="monotone" dataKey="totalExpenses" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="label" textAnchor="end" sclaeToFit="true" verticalAnchor="start" interval={0} />
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