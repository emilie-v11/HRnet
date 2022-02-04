import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import employees from './employees.js';

const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({
    employees: employees,
});

export default persistReducer(persistConfig, rootReducer);
