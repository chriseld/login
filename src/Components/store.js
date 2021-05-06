import { createStore } from 'redux';
import { allReducers } from '../reducers';
import isLogged from '../reducers/user';

const store = createStore(allReducers, [isLogged] + window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;