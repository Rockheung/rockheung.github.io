import React from 'react';
import styled from '@emotion/styled';

export default ({ children }) => {
  return <Intro>{children}</Intro>;
};

const Intro = styled.section`
  text-align: center;
  margin: 2rem auto;
  > * {
    margin: 3rem auto;
  }
`;
