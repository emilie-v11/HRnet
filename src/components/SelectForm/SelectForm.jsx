import React from 'react';
import PropTypes from 'prop-types';

const SelectForm = props => {
    return (
        <select name={props.name} id={props.name} value={props.value} onChange={props.onChange}>
            {props.data.map((data, index) => (
                <option key={index} value={data}>
                    {data}
                </option>
            ))}
        </select>
    );
};

SelectForm.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default SelectForm;
