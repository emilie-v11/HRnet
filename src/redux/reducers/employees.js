import { ADD_NEW_EMPLOYEE } from '../actions/types';

const initialState = {
    employees: [],
};

export default function employees(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case ADD_NEW_EMPLOYEE:
            return {
                employees: [...state.employees, payload],
            };
        default:
            return state;
    }
}
