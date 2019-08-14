import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import StartPage from './StartPage.js';

import { Provider } from "./ducks/ContentContext";

const ContentOuterWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  min-height: 100%;
  margin-top: 30px;
`;

const Content = ({
  selectedCategory,
  categoryData
}) => {
  return (
    <Provider
      value={{
        selectedCategory,
        categoryData
      }}
    >
      <ContentOuterWrapper>
            {!selectedCategory && 
              <StartPage />
            }
      </ContentOuterWrapper>
    </Provider>
  )
}

const mapStateToProps = state => ({
  selectedCategory: state.contentReducer.selectedCategory,
  categoryData: state.contentReducer.categoryData
})
  
export default connect(mapStateToProps)(Content);
