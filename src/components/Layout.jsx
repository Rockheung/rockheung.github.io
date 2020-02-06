import React from 'react';
import styled from '@emotion/styled';
import MenuBar from './MenuBar';
import HoverContainer from './HoverContainer';

export default ({ children }) => {
  return (
    <div>
      <MenuBar />
      <HoverContainer>
        <Main>{children}</Main>
      </HoverContainer>
    </div>
  );
};

const Layout = styled.div`
  display: inline-block;
`;

const Main = styled.div`
  background-color: white;
  height: calc(100vh - 9rem);
  width: calc(800px - 2rem);
  max-width: calc(100vw - 2rem);
  overflow-y: auto;
  padding: 1rem;
  -webkit-overflow-scrolling: touch;
`;
