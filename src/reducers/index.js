import isLogged from './user';
import { combineReducers } from 'redux';
import { username, userid, useremail, userrole } from './userInfo';

const allReducers = combineReducers({
    isLogged,
    username,
    userid,
    useremail,
    userrole
});

export { allReducers };