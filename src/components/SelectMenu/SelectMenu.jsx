import React from 'react';
import PropTypes from 'prop-types';
import { Label, Select } from 'select-react-bootstrap';

const SelectMenu = ({ label, idHtmlFor, inputName, selectText, data, value, onChange }) => {
    return (
        <>
            <Label label={label} htmlFor={idHtmlFor} />
            <Select
                name={inputName}
                id={idHtmlFor}
                selectText={selectText}
                data={data}
                value={value}
                onChange={onChange}
            />
        </>
    );
};

SelectMenu.propTypes = {
    label: PropTypes.string.isRequired,
    idHtmlFor: PropTypes.string.isRequired,
    inputName: PropTypes.string.isRequired,
    selectText: PropTypes.string,
    data: PropTypes.array.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default SelectMenu;
