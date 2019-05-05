const path = require(`path`);

module.exports = {
      siteMetadata: {
            title: "Mr. Wood's Science Page",
            author: "Logan Wood",
      },
      plugins: [
            `gatsby-plugin-sass`,
            `gatsby-plugin-react-helmet`,
            {
                  resolve: `gatsby-plugin-material-ui`,
                  // If you want to use styled components, in conjunction to Material-UI, you should:
                  // - Change the injection order
                  // - Add the plugin
                  options: {
                        // stylesProvider: {
                        //   injectFirst: true,
                        // },
                  },
                  // 'gatsby-plugin-styled-components',
            },
            {
                  resolve: "gatsby-source-filesystem",
                  options: {
                        name: "TEKS",
                        path: `${__dirname}/src/components/TEKS`,
                  },
            },
            {
                  resolve: `gatsby-source-filesystem`,
                  options: {
                        name: `images`,
                        path: `${__dirname}/src/images`,
                  },
            },
            `gatsby-plugin-sharp`,
            `gatsby-transformer-sharp`,
            `gatsby-plugin-playground`,
      ],
};
