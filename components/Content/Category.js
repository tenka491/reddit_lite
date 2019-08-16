import React, { useContext } from 'react';
import { ContentContext } from './ducks/ContentContext';
import SubReddit from './SubReddit';
import uniqueKeyGen from '../../utils/uniqueKeyGen';

const Category = () => {
  const {
    selectedCategory,
    selectedCategoryData,
    actions
  } = useContext(ContentContext);
  return (
    <div>
      <h1>{selectedCategory}</h1>
      <div onClick={() => actions.resetSelectedCategory()}>
        <span className="fa fa-angle-double-left"></span> Back
      </div>
      {selectedCategoryData && selectedCategoryData.children.map(subreddit => {
        return <SubReddit key={uniqueKeyGen()} subreddit={subreddit} />
      })}
    </div>
  )
}

export default Category;
