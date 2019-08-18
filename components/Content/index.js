import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import StartPage from './StartPage.js';

import { Provider } from "./ducks/ContentContext";
import * as contentActions from './ducks/actions';
import Category from './Category.js';

const ContentOuterWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  min-height: 100%;
  margin-top: 30px;
`;

const StartPageWrapper = styled.div`
  width: ${props => props.shouldCondense ? '180px' : '100%'};
`;

const Content = ({
  selectedCategory,
  categoryData,
  selectedCategoryData,
  actions
}) => {

  useEffect(() => {
    if(selectedCategory !== '') {
      actions.setSelectedCategory(selectedCategory);
    }
  }, [])

  return (
    <Provider
      value={{
        selectedCategory,
        categoryData,
        selectedCategoryData,
        actions
      }}
    >
      <ContentOuterWrapper>
        <StartPageWrapper shouldCondense={!!selectedCategory}>
          <StartPage shouldCondense={!!selectedCategory} />
        </StartPageWrapper>
            {selectedCategory &&
              <Category />
            }
      </ContentOuterWrapper>
    </Provider>
  )
}

const mapStateToProps = state => ({
  selectedCategory: state.contentReducer.selectedCategory,
  categoryData: state.contentReducer.categoryData,
  selectedCategoryData: state.contentReducer.selectedCategoryData
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(contentActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Content);
