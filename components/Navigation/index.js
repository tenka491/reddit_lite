import React, { Fragment } from 'react';
import styled from 'styled-components';
import Profile from './Profile';

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.white};
  background-color: ${props => props.theme.darkGray};
  border-radius: 0 0 15px 15px;
  height: 75px;
  width: 75px;
  margin-left: 20px;
  margin-right: 20px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.primary};
  }
`;

const NavigationBar = () => {
  return (
    <Fragment>
      <LogoWrapper>
        <span className="fab fa-reddit-alien fa-fw fa-2x"></span>
      </LogoWrapper>
      <Profile />
      <div>NavigationBar</div>
    </Fragment>
  );
}

export default NavigationBar;
