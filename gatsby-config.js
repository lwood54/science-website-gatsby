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
                        name: "src",
                        path: `${__dirname}/src/`,
                  },
            },
            "gatsby-transformer-sharp",
            "gatsby-plugin-sharp",
            {
                  resolve: "gatsby-transformer-remark",
                  options: {
                        plugins: [
                              `gatsby-remark-relative-images`,
                              {
                                    resolve: "gatsby-remark-images",
                                    options: {
                                          maxWidth: 750,
                                          linkImagesToOriginal: false,
                                    },
                              },
                        ],
                  },
            },
            `gatsby-plugin-playground`,
      ],
};
