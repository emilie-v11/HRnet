import React from 'react';
import PropTypes from 'prop-types';

const SelectMenu = ({ inputName, idHtmlFor, label, value, onChange, data }) => {
    return (
        <>
            <label htmlFor={idHtmlFor}>{label}</label>
            <select
                className="form-select"
                name={inputName}
                id={idHtmlFor}
                value={value}
                onChange={onChange}
            >
                <option value={''}></option>
                {data.map((data, index) => (
                    <option key={index} value={data}>
                        {data}
                    </option>
                ))}
            </select>
        </>
    );
};

SelectMenu.propTypes = {
    inputName: PropTypes.string.isRequired,
    idHtmlFor: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default SelectMenu;
