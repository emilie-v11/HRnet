import React from 'react';
import PropTypes from 'prop-types';

const SelectMenu = ({ inputName, idHtmlFor, label, value, onChange, data }) => {
    return (
        <>
            <label className="form-label" htmlFor={idHtmlFor}>
                {label}
            </label>
            <select
                className="form-select"
                name={inputName}
                id={idHtmlFor}
                value={value}
                onChange={onChange}
            >
                <option value={''}>Select ...</option>
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
    data: PropTypes.array.isRequired,
};

export default SelectMenu;
