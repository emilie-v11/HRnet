import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import SelectForm from '../SelectForm/SelectForm.jsx';
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
        <div className="container">
            <form action="#" id="create-employee">
                {/* <div>
                    <label htmlFor="birthday">Happy birthday</label>
                    <input
                        type="date"
                        name="birthday"
                        id="birthday"
                        onBlur={e => inputHandleChange(e, setBirthday)}
                        // onChange={date => handleDateFormat(date)}
                    />
                </div> */}
                <div>
                    <label htmlFor="first-name">First Name</label>
                    <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        onBlur={e => inputHandleChange(e, setFirstName)}
                    />
                </div>

                <div>
                    <label htmlFor="last-name">Last Name</label>
                    <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        onBlur={e => inputHandleChange(e, setLastName)}
                    />
                </div>

                <div>
                    <DatePicker
                        label="Date of Birth"
                        inputName="dateOfBirth"
                        idHtmlFor="date-of-birth"
                        onBlur={e => inputHandleChange(e, setDateOfBirth)}
                    />
                    {/* <label htmlFor="Date of Birth">Start Date</label>
                    <input
                        type="date"
                        name="dateOfBirth"
                        id="Date of Birth"
                        onBlur={e => inputHandleChange(e, setDateOfBirth)}
                        // onChange={date => handleDateFormat(date)}
                    /> */}
                    {/* <DatePicker onChange={e => inputHandleChange(e, setDateOfBirth)} /> */}
                </div>

                <div>
                    <DatePicker
                        label="start-date"
                        inputName="startDate"
                        idHtmlFor="start-date"
                        onBlur={e => inputHandleChange(e, setStartDate)}
                    />

                    {/* <label htmlFor="start-date">Start Date</label>
                    <input
                        type="date"
                        name="startDate"
                        id="start-date"
                        onBlur={e => inputHandleChange(e, setStartDate)}
                        // onChange={date => handleDateFormat(date)}
                    /> */}
                    {/* <DatePicker onChange={e => inputHandleChange(e, setStartDate)} /> */}
                </div>

                <fieldset className="address">
                    <legend>Address</legend>

                    <div>
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

                    <div>
                        <label htmlFor="state">State</label>
                        <SelectForm
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

                <label htmlFor="department">Department</label>
                <SelectForm
                    name="department"
                    data={departments}
                    value={department}
                    onChange={e => inputHandleChange(e, setDepartment)}
                />
            </form>

            <button onClick={onSubmit} className="submit-btn">
                Save
            </button>
        </div>
    );
};

FormCreateEmployee.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default FormCreateEmployee;
