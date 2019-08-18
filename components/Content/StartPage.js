import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { ContentContext } from './ducks/ContentContext';
import uniqueKeyGen from '../../utils/uniqueKeyGen';

const StartPageWrapper = styled.div`
  display: flex;
  flex-flow: ${props => (props.shouldCondense ? "column" : "row")} wrap;
  justify-content: ${props =>
    props.shouldCondense ? "flex-start" : "space-evenly"};
  height: 100%;
  width: 100%;
`;

const CategoryOutWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 45%;
  height: ${props => props.shouldCondense ? "45px" : "200px"};
  margin: 10px;
  background-color: ${props => 
    props.active 
      ? props.theme.primary 
      : props.theme.secondary};
  border-radius: 6px;
  border: 1px solid ${props => props.theme.primary};

  :hover {
    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.white};
  }
`;

const StartPage = ({ shouldCondense }) => {
  const { categoryData, actions, selectedCategory } = useContext(ContentContext);

  const catOnClickFunc = firstObj => {
    actions.setSelectedCategory(firstObj.subreddit);
  }
  const isActiveCategory = firstObj => selectedCategory === firstObj.subreddit;
  return (
    <StartPageWrapper shouldCondense={shouldCondense}>
      {categoryData && categoryData.map(category => {
        const firstObj = category.children[0].data;
        
        return (
          <CategoryOutWrapper
            key={uniqueKeyGen()}
            onClick={()=> catOnClickFunc(firstObj)}
            shouldCondense={shouldCondense}
            active={isActiveCategory(firstObj)}
          >
            {firstObj.subreddit}
          </CategoryOutWrapper>
        );
      })}
    </StartPageWrapper>
  );
}

export default StartPage;
