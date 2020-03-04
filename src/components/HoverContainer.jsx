import React from 'react';
import styled from '@emotion/styled';

const SHADOW_DEPTH = 0.5; // 0.5rem

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
  display: inline-block;
  left: 50%;
  top: 1rem;
  transform: translateX(-50%);
  transition: 0.3s;
  :hover {
    left: calc(50% + ${SHADOW_DEPTH}rem);
    top: calc(1rem - ${SHADOW_DEPTH}rem);
    > div:first-of-type {
      width: ${SHADOW_DEPTH}rem;
      left: -${SHADOW_DEPTH}rem;
    }
    > div:last-of-type {
      height: ${SHADOW_DEPTH}rem;
      bottom: -${SHADOW_DEPTH}rem;
    }
  }
  > * {
    transition: 0.3s;
  }
`;

const ShadowLeft = styled.div`
  background-color: cadetblue;
  position: absolute;
  height: 100%;
  width: 0rem;
  left: 0rem;
  transform: skewY(-45deg);
  transform-origin: 100%;
`;

const ShadowBottom = styled.div`
  background-color: #4c7e80;
  position: absolute;
  height: 0rem;
  width: 100%;
  bottom: 0rem;
  transform: skewX(-45deg);
  transform-origin: 50% 0%;
`;
