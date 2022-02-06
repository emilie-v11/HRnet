import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import SelectMenu from '../SelectMenu/SelectMenu.jsx';
import PropTypes from 'prop-types';
import './FormCreateEmployee.css';
import employeeActions from '../../redux/actions/index.js';
import { departments } from '../../assets/data/departments.js';
import { states } from '../../assets/data/states.js';
import DatePicker from '../DatePicker/DatePicker.jsx';

const FormCreateEmployee = props => {
    const dispatch = useDispatch();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [startDate, setStartDate] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [stateName, setStateName] = useState('Alabama');
    const [zipCode, setZipCode] = useState('');
    const [department, setDepartment] = useState('Sales');

    const handleDateFormat = date => {
        return date.split('-').reverse().join('-');
    };

    const stateNames = [];
    states.forEach(state => {
        stateNames.push(state.name);
    });

    const inputHandleChange = (e, inputValue) => {
        inputValue(e.target.value);
    };

    const capitalize = string => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    const isFilled = input => {
        return input.length > 0;
    };

    const onSubmit = () => {
        if (
            isFilled(firstName) &&
            isFilled(lastName) &&
            isFilled(dateOfBirth) &&
            isFilled(startDate) &&
            isFilled(street) &&
            isFilled(city) &&
            isFilled(stateName) &&
            isFilled(zipCode) &&
            isFilled(department)
        ) {
            dispatch(
                employeeActions.addEmployee({
                    firstName: capitalize(firstName),
                    lastName: capitalize(lastName),
                    dateOfBirth: handleDateFormat(dateOfBirth),
                    startDate: handleDateFormat(startDate),
                    street: capitalize(street),
                    city: capitalize(city),
                    stateName,
                    zipCode,
                    department,
                })
            );
            props.onSubmit();
        } else {
            window.alert('Please fill in all of the required fields');
        }
    };

    return (
        <div
            id="form-container"
            className="form-container bg-light rounded-3
        form"
        >
            <form action="#" id="create-employee" className="container">
                <div className="col w-100">
                    <label htmlFor="last-name">Last Name</label>
                    <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        onBlur={e => inputHandleChange(e, setLastName)}
                    />
                </div>

                <div className="col w-100">
                    <label htmlFor="first-name">First Name</label>
                    <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        onBlur={e => inputHandleChange(e, setFirstName)}
                    />
                </div>

                <div className="col w-100">
                    <DatePicker
                        label="Date of Birth"
                        inputName="dateOfBirth"
                        idHtmlFor="date-of-birth"
                        onBlur={e => inputHandleChange(e, setDateOfBirth)}
                    />
                </div>

                <fieldset className="address w-100">
                    <legend className="fs-6 text-start">Address</legend>

                    <div className="">
                        <label htmlFor="street">Street</label>
                        <input
                            id="street"
                            type="text"
                            name="street"
                            onBlur={e => inputHandleChange(e, setStreet)}
                        />
                    </div>

                    <div>
                        <label htmlFor="city">City</label>
                        <input
                            id="city"
                            type="text"
                            name="city"
                            onBlur={e => inputHandleChange(e, setCity)}
                        />
                    </div>

                    <div className="col w-100">
                        <SelectMenu
                            label="State"
                            name="state"
                            data={stateNames}
                            value={stateName}
                            onChange={e => inputHandleChange(e, setStateName)}
                        />
                    </div>

                    <div>
                        <label htmlFor="zip-code">Zip Code</label>
                        <input
                            id="zip-code"
                            type="number"
                            name="zip-code"
                            onBlur={e => inputHandleChange(e, setZipCode)}
                        />
                    </div>
                </fieldset>

                <div className="col w-100">
                    <DatePicker
                        label="start-date"
                        inputName="startDate"
                        idHtmlFor="start-date"
                        onBlur={e => inputHandleChange(e, setStartDate)}
                    />
                </div>

                <div className="col w-100">
                    <SelectMenu
                        label="Department"
                        name="department"
                        data={departments}
                        value={department}
                        onChange={e => inputHandleChange(e, setDepartment)}
                    />
                </div>
                <button
                    className="submit-btn m-3 w-100 rounded-3 text-light p-2"
                    onClick={onSubmit}
                >
                    Save
                </button>
            </form>
        </div>
    );
};

FormCreateEmployee.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default FormCreateEmployee;
