import React from 'react';
import styled from '@emotion/styled';
import MenuBar from './MenuBar';

export default ({ children, menu }) => {
  return (
    <>
      <MenuBar />
      <Layout>{children}</Layout>
    </>
  );
};

const Layout = styled.div`
  background-color: white;
  margin: 1rem auto;
  max-width: 800px;
  height: calc(100% - 8rem);
  overflow-y: auto;
  padding: 1rem;
  transition: 0.2s;
  :hover {
    box-shadow: -0.3rem 0.3rem cadetblue;
    transform: translate(0.3rem, -0.3rem);
  }
`;
