import React, { useState, useEffect, useCallback, useRef } from 'react';
import styled from '@emotion/styled';
import { StaticQuery, graphql, Link } from 'gatsby';

export default () => {
  const [loading, setLoading] = useState(true);
  const shovelRef = useRef(null);

  useEffect(() => {
    setLoading(false);
    return () => setLoading(true);
  }, []);

  if (loading) {
    return <Shovel ref={shovelRef} digging={loading} />;
  }

  return <Shovel ref={shovelRef} digging={loading} />;
};

const Shovel = styled.div`
  float: left;
  position: relative;
  overflow: hidden;
  transform: rotate(0deg);
  width: 4rem;
  height: 4rem;
  ::before {
    content: '';
    position: absolute;
    height: 4rem;
    width: 4rem;
    background: url(/icons/shovel.svg) 0 0 no-repeat;
    transform: translate(0.2rem, 0rem) rotate(26.565deg);
    z-index: -1;
    ${props =>
      props.digging
        ? `
    animation-duration: 0.4s;
    animation-name: digging-shovel;
    animation-iteration-count: infinite;`
        : ''};
  }
`;
