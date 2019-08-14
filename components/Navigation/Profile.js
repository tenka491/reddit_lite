import React from 'react';
import styled from 'styled-components';

const ProfileWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  cursor: pointer;

  span {
    margin-left: 5px;
  }
`;

const Profile = () => {
  return (
    <ProfileWrapper>
      <span className="fas fa-user fa-fw" />
      <span>Shane Connor</span>
      <span className="fas fa-caret-down fa-fw" />
    </ProfileWrapper>
  );
}

export default Profile;
