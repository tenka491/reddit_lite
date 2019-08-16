import * as types from './actionTypes';

export const setSelectedCategory = payload => ({
  type: types.SET_SELECTED_CATEGORY,
  payload
})

export const resetSelectedCategory = () => ({
  type: types.RESET
})