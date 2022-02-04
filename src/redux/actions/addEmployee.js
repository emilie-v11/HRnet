import { ADD_NEW_EMPLOYEE } from './types';

export const addEmployee = employeeData => async dispatch => {
    dispatch({
        type: ADD_NEW_EMPLOYEE,
        payload: employeeData,
    });
};
