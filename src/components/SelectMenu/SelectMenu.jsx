import React from 'react';
import PropTypes from 'prop-types';

const SelectMenu = ({ name, label, value, onChange, data }) => {
    return (
        <>
            <label htmlFor={name}>{label}</label>
            <select name={name} id={name} value={value} onChange={onChange}>
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
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default SelectMenu;
