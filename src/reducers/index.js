import isLogged from './user';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    isLogged
});

export { allReducers };