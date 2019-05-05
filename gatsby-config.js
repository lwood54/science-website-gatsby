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
            `gatsby-plugin-playground`,
      ],
};
