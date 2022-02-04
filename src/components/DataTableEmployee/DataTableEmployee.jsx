import React from 'react';
import { useSelector } from 'react-redux';
import MUIDataTable from 'mui-datatables';
import './DataTableEmployee.css';

const DataTableEmployee = () => {
    const columns = [
        'Last Name',
        'First Name',
        'Date of Birth',
        'Department',
        'Start Date',
        'Street',
        'City',
        'State',
        'Zip Code',
    ];

    const options = {
        // filter: false,
        filter: true,
        download: false,
        selectableRowsHideCheckboxes: true,
        selectableRowsHeader: false,
        print: false,
        viewColumns: false,
    };

    const employees = useSelector(state => state.employees.employees);
    const employeesArray = [];
    employees.forEach(employee => {
        const data = [
            employee.lastName,
            employee.firstName,
            employee.dateOfBirth, //TODO
            employee.department,
            employee.startDate,
            employee.street,
            employee.city,
            employee.stateName,
            employee.zipCode,
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
