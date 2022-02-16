import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatePickerReact = ({ label, idHtmlFor, placeholderText, dateFormat, onChange, selected }) => {
    return (
        <>
            <label htmlFor={idHtmlFor}>{label}</label>
            <DatePicker
                id={idHtmlFor}
                placeholderText={placeholderText}
                dateFormat={dateFormat}
                onChange={onChange}
                selected={selected}
            />
        </>
    );
};

DatePickerReact.protoTypes = {
    label: PropTypes.string.isRequired,
    idHtmlFor: PropTypes.string.isRequired,
    placeholderText: PropTypes.string,
    dateFormat: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    selected: PropTypes.string,
};

export default DatePickerReact;
