import React, { useState, useEffect, useCallback } from 'react';
import styled from '@emotion/styled';
import { StaticQuery, graphql, Link } from 'gatsby';

export default () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
    // setTimeout(() => setLoading(false), 500);
    return () => setLoading(true);
  }, []);

  return <Shovel digging={loading} />;
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
    background: url(./icons/shovel.svg) 0 0 no-repeat;
    transform: rotate(${props => (props.digging ? 5 : -5) + 45}deg);
    z-index: -1;
    transition: 1s;
  }
`;
