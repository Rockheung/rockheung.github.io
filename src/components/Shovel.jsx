import React from 'react';
import styled from '@emotion/styled';
import { StaticQuery, graphql, Link } from 'gatsby';

export default () => {
  return <Shovel />;
};

const Shovel = styled.div`
  float: left;
  padding: 1rem;
  height: 2rem;
  width: 2rem;
  margin: 0rem 1rem;
  line-height: 2rem;
  background: url(./icons/shovel.svg) no-repeat center;
  transform: rotate(45deg);
`;
