import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import valueReducer from './valueReducer';

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  values: valueReducer
});
