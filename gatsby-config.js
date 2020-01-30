/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const path = require('path');
const fs = require('fs');
const YAML = require('js-yaml');

module.exports = {
  siteMetadata: YAML.safeLoad(
    fs.readFileSync(path.join(__dirname, '_config.yml'), 'utf8'),
    { json: true }
  ),
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/_posts/`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [],
      },
    },
    {
      resolve: 'gatsby-plugin-emotion',
      options: {},
    },
  ],
};
