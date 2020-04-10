import {combineReducers} from 'redux';
import auth from '../auth/reducers';

const createReducer = (asyncReducers) =>
    combineReducers({
        auth,
        ...asyncReducers
    });

export default createReducer;
