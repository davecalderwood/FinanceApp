import React from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const Budget = (props) => {
    // All items get passed as props to this component
    // Filter out all items that match this month/year
    // Sort into each group
    // Pass into chart
    let newDate = new Date()
    // Get current month and format to be two digits (MM)
    let month = ((newDate.getMonth() + 1) < 10 ? '0' : '') + (newDate.getMonth() + 1);
    // Get YYYY
    let year = newDate.getFullYear();

    const data = props.items;
    let currentData = [];
    data.forEach(item => {
        // check if item is within this month and year
        if (item.Date.slice(-4) === year.toString() && item.Date.slice(0, 2) === month.toString()) {
            currentData.push(item)
        }
    });

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    var total = 0;
    var newCategory = [];
    var catTotal = 0;
    currentData.forEach(i => {
        if (!newCategory.includes(i.Category)) {
            newCategory.push(i.Category);
        }
    });
    for (let j = 0; j < newCategory.length; j++) {
        if (currentData.Category === newCategory[j]) {
            catTotal += currentData.Amount
        }
    }

    // var chartData = [
    //     {name: chartCategories, value: }
    // ]

    return (
        <>
            {/* <PieChart width={400} height={400}>
                <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart> */}
        </>
    );
}

export default Budget;