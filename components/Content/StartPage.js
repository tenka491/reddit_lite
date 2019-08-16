import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { ContentContext } from './ducks/ContentContext';
import uniqueKeyGen from '../../utils/uniqueKeyGen';

const StartPageWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  height: 100%;
  width: 100%;
`;

const CategoryOutWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 45%;
  height: 200px;
  margin: 10px;
  background-color: ${props => props.theme.secondary};
  zoom: auto;
  border-radius: 6px;
  border: 1px solid ${props => props.theme.primary};

  :hover {
    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.white};
  }
`;

const StartPage = () => {
  const { categoryData, actions } = useContext(ContentContext);

  const catOnClickFunc = firstObj => {
    actions.setSelectedCategory(firstObj.subreddit);
  }
  return (
    <StartPageWrapper>
      {categoryData && categoryData.map(category => {
        const firstObj = category.children[0].data;
        
        return (
          <CategoryOutWrapper
            key={uniqueKeyGen()}
            onClick={()=> catOnClickFunc(firstObj)}
          >
            {firstObj.subreddit}
          </CategoryOutWrapper>
        );
      })}
    </StartPageWrapper>
  );
}

export default StartPage;
