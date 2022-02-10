import React from 'react';
import { useSelector } from 'react-redux';
import MUIDataTable from 'mui-datatables';
import './DataTableEmployee.css';

const DataTableEmployee = () => {
    const columns = [
        {
            name: 'Last Name',
            ariaLabel: 'Last Name',
            options: {
                filter: true,
                sort: false,
            },
        },
        {
            name: 'First Name',
            ariaLabel: 'First Name',
            options: {
                filter: true,
                sort: false,
            },
        },
        {
            name: 'Date of Birth',
            ariaLabel: 'Date of Birth',
            options: {
                filter: true,
                sort: false,
            },
        },
        {
            name: 'Street',
            ariaLabel: 'Street',
            options: {
                filter: true,
                sort: false,
            },
        },
        {
            name: 'City',
            ariaLabel: 'City',
            options: {
                filter: true,
                sort: false,
            },
        },
        {
            name: 'State',
            ariaLabel: 'State',
            options: {
                filter: true,
                sort: false,
            },
        },
        {
            name: 'Zip Code',
            ariaLabel: 'Zip Code',
            options: {
                filter: true,
                sort: false,
            },
        },
        {
            name: 'Department',
            ariaLabel: 'Department',
            options: {
                filter: true,
                sort: false,
            },
        },
        {
            name: 'Start Date',
            ariaLabel: 'Start Date',
            options: {
                filter: true,
                sort: false,
            },
        },
    ];

    const options = {
        filter: true,
        download: false,
        selectableRowsHideCheckboxes: true,
        selectableRowsHeader: true, // false
        print: false,
        viewColumns: false, // true
        onRowsDelete: true,
    };

    const employees = useSelector(state => state.employees.employees);
    const employeesArray = [];
    employees.forEach(employee => {
        const data = [
            employee.lastName,
            employee.firstName,
            employee.dateOfBirth,
            employee.street,
            employee.city,
            employee.state,
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
            data={data}
            columns={columns}
            options={options}
        />
    );
};

export default DataTableEmployee;
