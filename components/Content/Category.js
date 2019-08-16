import React, { useContext } from 'react';
import { ContentContext } from './ducks/ContentContext';
import SubReddit from './SubReddit';
import uniqueKeyGen from '../../utils/uniqueKeyGen';

const Category = () => {
  const {
    selectedCategory,
    selectedCategoryData
  } = useContext(ContentContext);
  return (
    <div>
      <h1>{selectedCategory}</h1>
      {selectedCategoryData && selectedCategoryData.children.map(subreddit => {
        return <SubReddit key={uniqueKeyGen()} subreddit={subreddit} />
      })}
    </div>
  )
}

export default Category;
