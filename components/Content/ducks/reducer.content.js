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
        selectedCategory: action.payload,
        selectedCategoryData: state.categoryData.find(cat => {
            return cat.children[0].data.subreddit === action.payload;
          })
      };
    
    case types.RESET: 
    return {
      ...state,
      selectedCategory: '',
      selectedCategoryData: {}
    };

    default:
      return state;
  }
}