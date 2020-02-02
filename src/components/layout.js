import React from 'react';
import styled from '@emotion/styled';

export default ({ children }) => {
  return <Layout>{children}</Layout>;
};

const Layout = styled.div`
  background-color: white;
  margin: 2rem auto;
  max-width: 800px;
  padding: 1rem;
  box-shadow: -1rem 1rem cadetblue;
`;
