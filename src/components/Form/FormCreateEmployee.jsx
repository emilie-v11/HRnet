import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import './FormCreateEmployee.css';
import employeeActions from '../../redux/actions/index.js';
import { departments } from '../../assets/data/departments.js';
import { states } from '../../assets/data/states.js';
import SelectMenu from '../SelectMenu/SelectMenu.jsx';
import Modal from '../../components/Modal/Modal';
import DatePickerReact from '../DatePicker/DatePicker';

const FormCreateEmployee = () => {
    const dispatch = useDispatch();
    const form = useRef();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [initialDob, setInitialDob] = useState(null);
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [initialStartDate, setInitialStartDate] = useState(null);
    const [startDate, setStartDate] = useState('');
    const [department, setDepartment] = useState('');

    const [errorMessage, setErrorMessage] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);

    // const formattedStatesArray = states.map(({ name: label, abbreviation: value, ...rest }) => ({
    //     label,
    //     value,
    //     ...rest,
    // }));

    const formattedStatesArray = states.map(state => {
        return {
            optionLabel: state.name,
            optionValue: state.abbreviation,
        };
    });

    // => French date formatted with simple input type 'date'
    // const handleDateFormat = date => {
    //     return date.split('-').reverse().join('-');
    // };

    const handleDateFormat = (date, dateFormatted, dateInput) => {
        // const dateString = date.toLocaleString('en-US').split(',').shift();
        const dateWithoutTime = date.toLocaleString('en-GB').split(',').shift();
        dateInput(date);
        const newFormat = dateWithoutTime.split('/');
        // if date.toLocaleString('en-US') next 2 lines are not necessary
        [newFormat[0], newFormat[1]] = [newFormat[1], newFormat[0]];
        dateFormatted(newFormat.join('-'));
    };

    const handleChangeInput = (e, inputName) => {
        inputName(e.target.value);
    };

    const capitalize = str => {
        return str.trim().charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    };

    const isFilled = input => {
        return input.length > 0;
    };

    const initialStates = e => {
        e.preventDefault();

        setFirstName('');
        setLastName('');
        setInitialDob(null);
        setDateOfBirth('');
        setStreet('');
        setCity('');
        setState('');
        setZipCode('');
        setInitialStartDate(null);
        setStartDate('');
        setDepartment('');

        setErrorMessage(false);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleSubmitForm = e => {
        e.preventDefault();
        if (
            isFilled(firstName) &&
            isFilled(lastName) &&
            isFilled(dateOfBirth) &&
            isFilled(street) &&
            isFilled(city) &&
            isFilled(state) &&
            isFilled(zipCode) &&
            isFilled(startDate) &&
            isFilled(department)
        ) {
            dispatch(
                employeeActions.addEmployee({
                    lastName: capitalize(lastName),
                    firstName: capitalize(firstName),
                    dateOfBirth,
                    street: capitalize(street),
                    city: capitalize(city),
                    state,
                    zipCode,
                    startDate,
                    department,
                })
            );
            handleOpenModal();
            initialStates(e);
        } else {
            setErrorMessage(true);
        }
    };

    return (
        <div id="form-container" className="form-container rounded-3 form">
            <form action="#" id="create-employee" className="container" ref={form}>
                <div className="col w-100">
                    <label htmlFor="last-name">Last Name</label>
                    <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        value={lastName}
                        onChange={e => handleChangeInput(e, setLastName)}
                    />
                </div>

                <div className="col w-100">
                    <label htmlFor="first-name">First Name</label>
                    <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        value={firstName}
                        onChange={e => handleChangeInput(e, setFirstName)}
                    />
                </div>

                <div className="col w-100">
                    <DatePickerReact
                        label="Date of Birth"
                        idHtmlFor="date-of-birth"
                        placeholderText="mm/dd/yyyy"
                        dateFormat="MM/dd/yyyy"
                        onChange={date => handleDateFormat(date, setDateOfBirth, setInitialDob)}
                        selected={initialDob}
                    />
                </div>

                <fieldset className="address w-100 border pt-0 p-3 mt-3 rounded-3">
                    <legend className=" float-none w-25 fs-6 text-center mb-0 fw-bold">
                        Address
                    </legend>

                    <div>
                        <label className="mt-1" htmlFor="street">
                            Street
                        </label>
                        <input
                            id="street"
                            type="text"
                            name="street"
                            value={street}
                            onChange={e => handleChangeInput(e, setStreet)}
                        />
                    </div>

                    <div>
                        <label htmlFor="city">City</label>
                        <input
                            id="city"
                            type="text"
                            name="city"
                            value={city}
                            onChange={e => handleChangeInput(e, setCity)}
                        />
                    </div>

                    <div className="col w-100">
                        <SelectMenu
                            label="State"
                            idHtmlFor="state"
                            inputName="state"
                            selectText="Select..."
                            data={formattedStatesArray}
                            value={state}
                            onChange={e => handleChangeInput(e, setState)}
                        />
                    </div>

                    <div>
                        <label htmlFor="zip-code">Zip Code</label>
                        <input
                            id="zip-code"
                            type="number"
                            name="zip-code"
                            min="0"
                            value={zipCode}
                            onChange={e => handleChangeInput(e, setZipCode)}
                        />
                    </div>
                </fieldset>

                <div className="col w-100">
                    <DatePickerReact
                        label="Start Date"
                        idHtmlFor="start-date"
                        placeholderText="mm/dd/yyyy"
                        dateFormat="MM/dd/yyyy"
                        onChange={date => handleDateFormat(date, setStartDate, setInitialStartDate)}
                        selected={initialStartDate}
                    />
                </div>

                <div className="col w-100">
                    <SelectMenu
                        label="Department"
                        idHtmlFor="department"
                        inputName="department"
                        selectText="Select..."
                        data={departments}
                        value={department}
                        onChange={e => handleChangeInput(e, setDepartment)}
                    />
                </div>

                {errorMessage && (
                    <div className="alert alert-danger m-0 mt-3 w-100 align-middle" role="alert">
                        <p className="m-0">
                            Caution! <br />
                            One or more fields in the form are empty. <br />
                        </p>
                    </div>
                )}
                <div className=" btn-group w-100" role="group">
                    <button
                        className="submit-btn btn btn-secondary w-50 my-4 me-2 rounded-3"
                        onClick={handleSubmitForm}
                    >
                        Save
                    </button>
                    <button
                        className="reset-btn btn btn-light text-dark w-50 my-4 ms-2 rounded-3"
                        onClick={initialStates}
                    >
                        Reset
                    </button>
                </div>
                {isModalOpen && (
                    <Modal onClick={handleCloseModal} message=" New employee created !" />
                )}
            </form>
        </div>
    );
};

export default FormCreateEmployee;
