import * as types from './actionTypes';
import initialState from '../../../ducks/initialState';

export default function contentReducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case types.SET_SELECTED_CATEGORY:
      return {
        ...state,
        selectedCategory: action.payload
      };
      
      default:
      return state;
  }
}