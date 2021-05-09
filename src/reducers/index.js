import isLogged from './user';
import { combineReducers } from 'redux';
import { username } from './userInfo';

const allReducers = combineReducers({
    isLogged,
    username
});

export { allReducers };