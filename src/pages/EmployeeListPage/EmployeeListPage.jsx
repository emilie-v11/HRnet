import React from 'react';
import DataTableEmployee from '../../components/DataTableEmployee/DataTableEmployee';
import './EmployeeListPage.css';

const EmployeeListPage = () => {
    return (
        <main className="text-center py-5">
            <h2 className="mb-5 text-light">Current Employees</h2>
            
            <DataTableEmployee />
        </main>
    );
};

export default EmployeeListPage;
