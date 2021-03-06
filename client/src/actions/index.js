import values from '../apis/values';
import history from '../history';
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_VALUE,
  FETCH_VALUES,
  FETCH_VALUE,
  DELETE_VALUE,
  EDIT_VALUE
} from './types';

export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const createValue = formValues => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await values.post('/values', { ...formValues, userId });

  dispatch({ type: CREATE_VALUE, payload: response.data });
  history.push('/');
};

export const fetchValues = () => async dispatch => {
  const response = await values.get('/values');

  dispatch({ type: FETCH_VALUES, payload: response.data });
};

export const fetchValue = id => async dispatch => {
  const response = await values.get(`/values/${id}`);

  dispatch({ type: FETCH_VALUE, payload: response.data });
};

export const editValue = (id, formValues) => async dispatch => {
  const response = await values.patch(`/values/${id}`, formValues);

  dispatch({ type: EDIT_VALUE, payload: response.data });
  history.push('/');
};

export const deleteValue = id => async dispatch => {
  await values.delete(`/values/${id}`);

  dispatch({ type: DELETE_VALUE, payload: id });
  history.push('/');
};
