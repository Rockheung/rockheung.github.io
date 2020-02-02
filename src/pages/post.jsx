import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

export default () => {
  return (
    <Layout>
      <div>
        <h1></h1>
        <div></div>
      </div>
    </Layout>
  );
};

// export const query = graphql`
//   query($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       html
//       frontmatter {
//         title
//       }
//     }
//   }
// `
