import { combineReducers } from 'redux'
import authState from './authReducer';
import authMess from './messReducer';



const rootReducer = combineReducers({
    authState,
    authMess,
})

export default rootReducer;
