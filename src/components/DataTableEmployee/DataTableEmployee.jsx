import React from 'react';
import { useSelector } from 'react-redux';
import MUIDataTable from 'mui-datatables';
import './DataTableEmployee.css';

const DataTableEmployee = () => {
    const columns = [
        'Last Name',
        'First Name',
        'Date of Birth',
        'Street',
        'City',
        'State',
        'Zip Code',
        'Department',
        'Start Date',
    ];

    const options = {
        // filter: false,
        filter: true,
        download: false,
        selectableRowsHideCheckboxes: true,
        selectableRowsHeader: false,
        // selectableRowsHeader: true,
        print: false,
        // viewColumns: false,
        viewColumns: true,
    };

    const employees = useSelector(state => state.employees.employees);
    const employeesArray = [];
    employees.forEach(employee => {
        const data = [
            employee.lastName,
            employee.firstName,
            // employee.dateOfBirth.split('-').reverse().join('-'),
            employee.dateOfBirth,
            employee.street,
            employee.city,
            employee.stateName,
            employee.zipCode,
            employee.department,
            employee.startDate,
        ];
        employeesArray.push(data);
    });

    const data = employeesArray;

    return (
        <MUIDataTable
            id="MUIDataTable"
            className="container"
            // className={className}
            data={data}
            columns={columns}
            options={options}
        />
    );
};

export default DataTableEmployee;
