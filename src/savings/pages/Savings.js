import React from 'react';
import SavingsList from '../components/SavginsList';

import MOCK_DATA from '../../MOCK_DATA.json'

const Savings = () => {
    return (
        <>
            <SavingsList items={MOCK_DATA} />
        </>
    );
}

export default Savings;