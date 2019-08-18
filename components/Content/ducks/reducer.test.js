import * as types from './actionTypes';
import contentReducer from './reducer.content';

let state;
let action;
beforeEach(()=>{
  state = {
    some: 'Random',
    stuff: ['goes', 'in', 'here'],
    for: 12344,
    testing: 'purposes',
    categoryData: [
      {children: [
        {data: {
          subreddit: 'The Karate Kid'
        }}
      ]},
      {children: [
        {data: {
          subreddit: 'Star Wars'
        }}
      ]}
    ]
  }
  action = {
    type: 'NOT_A_TYPE'
  }
})

test('should return default state', () => {
  const returnedState = contentReducer(state, action);
  expect(returnedState).toBe(state);
});

test('should return with selected category', () => {
  const category = 'The Karate Kid';
  const expectedState = {
    ...state,
    selectedCategory: category,
    selectedCategoryData: state.categoryData[0]
  }
  action = {
    type: types.SET_SELECTED_CATEGORY,
    payload: category
  }
  const selectedState = contentReducer(state, action);
  expect(selectedState).toStrictEqual(expectedState);
});

test("should return with selected category", () => {
  const expectedState = {
    ...state,
    selectedCategory: '',
    selectedCategoryData:{}
  };
  action = {
    type: types.RESET
  };
  const resetState = contentReducer(state, action);
  expect(resetState).toStrictEqual(expectedState);
});