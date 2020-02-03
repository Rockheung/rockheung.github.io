import React from 'react';
import styled from '@emotion/styled';

const SHADOW_DEPTH = 0.4; // 0.5rem

export default props => {
  return (
    <Container>
      <ShadowLeft />
      {props.children}
      <ShadowBottom />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  margin: 1rem auto;
  left: 0rem;
  top: 0rem;
  max-width: 800px;
  :hover {
    left: ${SHADOW_DEPTH}rem;
    top: -${SHADOW_DEPTH}rem;
    > div:first-of-type {
      width: ${SHADOW_DEPTH}rem;
      left: -${SHADOW_DEPTH}rem;
    }
    > div:last-of-type {
      height: ${SHADOW_DEPTH}rem;
      bottom: -${SHADOW_DEPTH}rem;
    }
  }
`;

const ShadowLeft = styled.div`
  background-color: cadetblue;
  position: absolute;
  height: calc(100vh - 6rem);
  width: 0rem;
  left: 0rem;
  transform: skewY(-45deg);
  transform-origin: 100%;
`;

const ShadowBottom = styled.div`
  background-color: #4c7e80;
  position: absolute;
  height: 0rem;
  width: 800px;
  bottom: 0rem;
  transform: skewX(-45deg);
  transform-origin: 50% 0%;
`;
