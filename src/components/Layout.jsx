import React, { useState, useRef, useCallback } from 'react';
import styled from '@emotion/styled';
import MenuBar from './MenuBar';
import { useEffect } from 'react';

const SHADOW_DEPTH = 0.4; // 0.5rem

export default ({ children }) => {
  const [hover, setHover] = useState(false);
  // const hoverDivRef = useRef(null);

  // useEffect(() => {
  //   hoverDivRef.current.addEventListener('mouseover', () => setHover(true));
  //   return () => hoverDivRef.current.removeEventListener('mouseover');
  // }, [hoverDivRef]);

  return (
    <>
      <MenuBar />
      <Container
        hover={hover}
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <ShadowLeft hover={hover} />
        <Layout>{children}</Layout>
        <ShadowBottom hover={hover} />
      </Container>
    </>
  );
};

const Container = styled.div`
  position: relative;
  margin: 1rem auto;
  left: ${props => (props.hover ? SHADOW_DEPTH : 0)}rem;
  top: -${props => (props.hover ? SHADOW_DEPTH : 0)}rem;
  height: calc(100% - 8rem);
  max-width: 800px;
`;

const Layout = styled.div`
  background-color: white;
  height: calc(100%);
  overflow-y: auto;
  padding: 1rem;
  transition: 0.2s;
  /* 
  :hover {
    box-shadow: -0.3rem 0.3rem cadetblue;
    transform: translate(0.3rem, -0.3rem);
  } */
`;

const ShadowLeft = styled.svg`
  background-color: cadetblue;
  position: absolute;
  height: calc(100% + 2rem);
  width: ${props => (props.hover ? SHADOW_DEPTH : 0)}rem;
  left: -${props => (props.hover ? SHADOW_DEPTH : 0)}rem;
  transform: skewY(-45deg);
  transform-origin: 100%;
`;

const ShadowBottom = styled.svg`
  background-color: #4c7e80;
  position: absolute;
  height: ${props => (props.hover ? SHADOW_DEPTH : 0)}rem;
  width: calc(800px);
  bottom: calc(-${props => (props.hover ? SHADOW_DEPTH : 0)}rem - 2rem);
  transform: skewX(-45deg);
  transform-origin: 50% 0%;
`;
