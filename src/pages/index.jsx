import React from 'react';
import { Link, graphql } from 'gatsby';
import { Layout, Intro, ProfileImage } from '../components';

const menu = [<p>Home</p>, <p>Post</p>, <p>About</p>, <p>Login</p>];

export default ({ data }) => {
  return (
    <Layout>
      <Intro>
        <h1>{data.site.siteMetadata.title}</h1>
        <ProfileImage src={data.site.siteMetadata.profile_img} />
        <p>{data.site.siteMetadata.description}</p>
      </Intro>

      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link to={node.fields.slug}>
            <h3>
              {node.frontmatter.title} <span>— {node.frontmatter.date}</span>
            </h3>
          </Link>
        </div>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        profile_img
        description
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 20
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
