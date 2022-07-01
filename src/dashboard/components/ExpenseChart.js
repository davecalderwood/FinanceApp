import React from 'react';
import Card from '../../UI/Card/Card';
import { AreaChart, Area, LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

const ExpenseChart = (props) => {

    const renderLineChart = (
        <AreaChart width={1000} height={300} data={props.total} aspect={3}>
            <Area type="monotone" dataKey="totalExpenses" stroke="#ff0000" fill='#ff4f4f' />
            <Area type="monotone" dataKey="totalSavings" stroke="#00a900" fill="#59ff59" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="label" textAnchor="end" sclaeToFit="true" verticalAnchor="start" interval={0} />
            <YAxis />
        </AreaChart>
    );

    return (
        <Card>
            <p>Expense Chart</p>
            {renderLineChart}
        </Card>
    );
}

export default ExpenseChart;