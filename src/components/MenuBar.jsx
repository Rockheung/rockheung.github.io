import React from 'react';
import styled from '@emotion/styled';
import { StaticQuery, graphql, Link } from 'gatsby';
import Shovel from './Shovel';

export default props => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              navbar {
                slug
                title
              }
            }
          }
        }
      `}
      render={data => (
        <MenuBar>
          <Shovel />
          {data.site.siteMetadata.navbar.map((item, idx, menuArray) => {
            return (
              <MenuItem key={idx} isRight={idx === menuArray.length - 1}>
                <Link to={item.slug}>{item.title}</Link>
              </MenuItem>
            );
          })}
        </MenuBar>
      )}
    />
  );
};

const MenuBar = styled.div`
  background-color: white;
  height: 4rem;
  :after {
    clear: both;
    display: block;
    content: '';
  }
`;

const MenuItem = styled.div`
  float: ${props => (props.isRight ? 'right' : 'left')};
  max-width: 10rem;
  padding: 1rem;
  text-align: center;
  line-height: 2rem;
  > p {
    margin: 0rem;
  }
`;
