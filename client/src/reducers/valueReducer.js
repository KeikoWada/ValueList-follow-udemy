import _ from 'lodash';
import {
  FETCH_VALUE,
  FETCH_VALUES,
  CREATE_VALUE,
  EDIT_VALUE,
  DELETE_VALUE
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_VALUES:
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case FETCH_VALUE:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_VALUE:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_VALUE:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_VALUE:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
