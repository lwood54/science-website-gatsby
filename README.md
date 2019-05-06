## Notes

### Dealing with Images

1. following the guidelines you can access the images, but realize that you can't use the spread operator in the way identified in the guide while working in the GraphQL IDE
2. The order definitely matters if you use different instances of the gatsby-source-filesystem to identify different schemas(?)

      - So if you are using a more general 'src' naming, then trying to use a child directory with another source name futher down in gatsby-config.js, then those won't be populated because the files seem to have already been flagged for the parent
      - Alternately, if you put the:

      ```
      {
                     resolve: `gatsby-source-filesystem`,
                     options: {
                           name: `src`,
                           path: `${__dirname}/src`,
                     },
               },
      ```

      at the bottom, then any files identified from an earlier resolve of 'gatsby-source-filesystem' that would come up with the earlier search won't show up in the src anymore.

      It sort of works like, first come first serve for queries it looks like.

      If using the more generalized src, then what worked well for me was to first do a search using sourceInstanceName to load the files I want and confirm any relative file paths that I might want to use.

      Then create a different query that I might use in a file so specifically load one image, and use the filter / relativePath that was confirmed in the other query

      NOTE: It does appear that these queries can get messed up if an additional resolve is created ahead of the currently used resolves

## Additional Error Point

1. Make sure to notice {} usage when using spread operator for the childImageSharp {}
