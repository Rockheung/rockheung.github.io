import React from 'react';
import styled from '@emotion/styled';

export default ({ children }) => {
  return <Layout>{children}</Layout>;
};

const Layout = styled.div`
  margin: 3rem auto;
  max-width: 800px;
  padding: 0 1rem;
`;
