import React from "react";
import styled, { ThemeProvider } from 'styled-components';

import { createStore } from 'redux';
import { Provider as ReduxStoreProvider } from 'react-redux';
import rootReducer from './ducks/reducer.root';

import NavigationBar from "./components/Navigation";

import theme from './theme';
import Content from "./components/Content";

const AppWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  font-family: Arial, Helvetica, sans-serif;
`;

const AppNavigationWrapper = styled.div`
  display: flex;
  flex-flow: row-reverse nowrap;
  align-items: center;
  justify-items: center;
  min-height: 45px;
  max-height: 45px;
  background-color: ${props => props.theme.lightGray};
`;

const AppContentWrapper = styled.div``;

const store = createStore(rootReducer);

class App extends React.Component {
  render() {
    return (
    <ThemeProvider theme={theme}>
      <ReduxStoreProvider store={store}>
        <AppWrapper>
          <AppNavigationWrapper>
            <NavigationBar />
          </AppNavigationWrapper>
          <AppContentWrapper>
            <Content />
          </AppContentWrapper>
        </AppWrapper>
      </ReduxStoreProvider>
    </ThemeProvider>
    );
  }
}
export default App;
