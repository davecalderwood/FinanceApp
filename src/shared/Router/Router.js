import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../../dashboard/pages/Dashboard';
import Expenses from '../../expenses/pages/Expenses';
import Savings from '../../savings/pages/Savings';
import User from '../../user/pages/User';

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/Expenses" element={<Expenses />} />
            <Route path="/User" element={<User />} />
            <Route path="/Savings" element={<Savings />} />

            <Route
                path="*"
                element={<Dashboard to="/" replace />} />
        </Routes>
    );
}
 
export default Router;