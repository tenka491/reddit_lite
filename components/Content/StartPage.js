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
  background-color: green;
  zoom: auto;
`;

const StartPage = () => {
  const { categoryData } = useContext(ContentContext);

  useEffect(() => {
    console.log({categoryData});
  }, []);

  return (
    <StartPageWrapper>
      {categoryData && categoryData.map(category => {
        const firstObj = category.children[0].data;
        console.log({firstObj});
        return (
          <CategoryOutWrapper key={uniqueKeyGen()}>
            {firstObj.subreddit}
          </CategoryOutWrapper>
        );
      })}
    </StartPageWrapper>
  );
}

export default StartPage;
