import React, { useContext } from 'react';
import { AuthContext } from '../Context/auth-context';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../../dashboard/pages/Dashboard';
import Expenses from '../../expenses/pages/Expenses';
import AddGoal from '../../goals/pages/AddGoal';
import Goals from '../../goals/pages/Goals';
import Savings from '../../savings/pages/Savings';
import User from '../../user/pages/User';
import AuthenticateUser from '../Authenticate/Auth';
import ProfilePage from '../../user/pages/Profile';
import MonthlyBudget from '../../Budget/Pages/MonthlyBudget';

const Router = () => {
    const auth = useContext(AuthContext);

    let routes;

    if (auth.isLoggedIn) {
        routes = (
            <>
                <Route path="/" element={<Dashboard />} />
                <Route path="/Expenses" element={<Expenses />} />
                <Route path="/User" element={<User />} />
                <Route path="/Savings" element={<Savings />} />

                <Route path="/Goals" element={<Goals />} />
                <Route path="/AddGoal" element={<AddGoal />} />

                <Route path="/Profile" element={<ProfilePage />} />

                <Route path="/Budget" element={<MonthlyBudget />} />

                <Route
                    path="*"
                    element={<Dashboard to="/" replace />} />
            </>
        );
    } else {
        routes = (
            <>
                <Route path="/Auth" element={<AuthenticateUser />} />
                <Route
                    path="*"
                    element={<AuthenticateUser to="/Auth" replace />} />
            </>
        );
    }

    return (
        <Routes>
            {routes}
        </Routes>
    );
}

export default Router;