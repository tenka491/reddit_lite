import React, { useContext } from 'react';
import styled from 'styled-components';

import { ContentContext } from './ducks/ContentContext';
import SubReddit from './SubReddit';
import uniqueKeyGen from '../../utils/uniqueKeyGen';

const H1Tag = styled.h1`
  font-size: 24px;
  margin: 5px 20px;
`;

const BackButton = styled.div`
  margin: 5px 20px;
  color: ${props => props.theme.darkGray};

  :hover {
    color: ${props => props.theme.primary};
  }
`;

const Category = () => {
  const {
    selectedCategory,
    selectedCategoryData,
    actions
  } = useContext(ContentContext);
  return (
    <div>
      <H1Tag>{selectedCategory}</H1Tag>
      <BackButton onClick={() => actions.resetSelectedCategory()}>
        <span className="fa fa-angle-double-left"></span> Back
      </BackButton>
      {selectedCategoryData && selectedCategoryData.children.map(subreddit => {
        return <SubReddit key={uniqueKeyGen()} subreddit={subreddit} />
      })}
    </div>
  )
}

export default Category;
