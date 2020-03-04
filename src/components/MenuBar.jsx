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
          <Link to={''}>
            <Shovel />
          </Link>
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
  height: 4rem;
  margin: 1rem;
  padding: 0.6rem;
  border-radius: 0.7rem;
  box-shadow: -0.1rem -0.1rem 0.4rem 0.01rem rgba(255, 255, 255, 0.8),
    -0.5rem -0.5rem 1rem 0.1rem rgba(255, 255, 255, 0.5),
    0.1rem 0.1rem 0.4rem 0.01rem rgba(15, 76, 129, 0.2),
    0.5rem 0.5rem 1rem 0.1rem rgba(15, 76, 129, 0.1);
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
