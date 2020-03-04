import React from 'react';
import styled from '@emotion/styled';
import MenuBar from './MenuBar';
import HoverContainer from './HoverContainer';

export default props => {
  return (
    <>
      <MenuBar />
      <Main>
        <InnerMain>{props.children}</InnerMain>
      </Main>
      <Footer />
    </>
  );
};

const Layout = styled.div`
  display: inline-block;
`;

const Main = styled.div`
  /* background-color: white; */
  width: calc(800px - 2rem);
  max-width: calc(100vw - 2rem);
  border-radius: 1.4rem;
  box-shadow: -0.1rem -0.1rem 0.4rem 0.01rem rgba(255, 255, 255, 0.8),
    -0.5rem -0.5rem 1rem 0.1rem rgba(255, 255, 255, 0.5),
    0.1rem 0.1rem 0.4rem 0.01rem rgba(15, 76, 129, 0.2),
    0.5rem 0.5rem 1rem 0.1rem rgba(15, 76, 129, 0.1);
  padding: 1rem;
  margin-top: 3rem;
  margin-bottom: 3rem;
  margin-left: auto;
  margin-right: auto;
`;

const InnerMain = styled.div`
  /* width: calc(800px - 4rem); */
  margin-left: auto;
  margin-right: auto;
  border-radius: 0.7rem;
  padding: 2rem;
  box-shadow: inset -0.1rem -0.1rem 0.4rem 0.01rem rgba(255, 255, 255, 0.8),
    inset -0.5rem -0.5rem 1rem 0.1rem rgba(255, 255, 255, 0.5),
    inset 0.1rem 0.1rem 0.4rem 0.01rem rgba(15, 76, 129, 0.2),
    inset 0.5rem 0.5rem 1rem 0.1rem rgba(15, 76, 129, 0.1);
`;

const Footer = styled.div`
  height: 2rem;
`;
