import React from 'react';
import styled from '@emotion/styled';

export default props => {
  return <ProfileImage {...props} />;
};

const ProfileImage = styled.div`
  height: 130px;
  width: 130px;
  margin: 0rem auto;
  background: url(${props => props.src}) no-repeat center;
  background-size: contain;
`;
