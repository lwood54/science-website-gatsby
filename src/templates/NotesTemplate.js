import React from "react";

import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const NotesTemplate = props => {
      const data = useStaticQuery(
            graphql`
                  query {
                        butterfly_on_leaves: allFile(
                              filter: { sourceInstanceName: { eq: "images" } }
                        ) {
                              edges {
                                    node {
                                          relativePath
                                          childImageSharp {
                                                fluid(maxWidth: 1600) {
                                                      ...GatsbyImageSharpFluid
                                                }
                                          }
                                    }
                              }
                        }
                  }
            `
      );
      console.log("data: ", data.butterfly_on_leaves);
      return (
            <div>
                  <h1>Notes Page</h1>
                  <h3>{props.content.title}</h3>
                  {props.children}
                  <Img
                        fluid={
                              data.butterfly_on_leaves.edges[0].node
                                    .childImageSharp.fluid
                        }
                  />
            </div>
      );
};

export default NotesTemplate;
