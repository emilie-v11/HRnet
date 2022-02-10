import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
// import logger from 'redux-logger';

// const middleware = [thunk, logger];

const initialState = {};
const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);
const persistor = persistStore(store);

export { persistor, store };

// const middleware = [thunk];

// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));

// export default store;
