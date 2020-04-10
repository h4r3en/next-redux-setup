import {combineReducers} from 'redux';
import auth from './auth.Reducers';

const authReducers = combineReducers({
    auth
});

export default authReducers;
