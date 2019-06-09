import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../../components/layout";
import Img from "gatsby-image";
import sev8B from "../../components/TEKS/sev8B.json";

import cls from "../../styles/unitPages.module.scss";
// Instead of passing the content to the NotesTemplate, use the NotesTemplate to wrap the content to add
// any needed headers and navs, but wrap the content.
// Then inside the NotesTemplate, use a NoteCard hoc like in the other website, then I can customize
// whether the images are left/right, whatever.

const unit1_1 = props => {
      const { sev8BJson } = useStaticQuery(
            graphql`
                  query {
                        sev8BJson {
                              topics {
                                    image {
                                          name
                                          imgSide
                                          imgSrc {
                                                childImageSharp {
                                                      fluid(maxWidth: 450) {
                                                            ...GatsbyImageSharpFluid
                                                      }
                                                }
                                          }
                                    }
                              }
                        }
                  }
            `
      );
      console.log("sev8B: ", sev8B);
      console.log("images: ", sev8BJson.topics[0].image.imgSrc);
      return (
            <Layout>
                  <h1 className={cls.unitPageTitle}>
                        Levels of Organization - Unit 1.1
                        <div style={{ width: "50%", margin: "auto" }}>
                              <Img
                                    fluid={
                                          sev8BJson.topics[0].image.imgSrc
                                                .childImageSharp.fluid
                                    }
                                    alt={sev8BJson.topics[0].image.name}
                              />
                        </div>
                  </h1>
            </Layout>
      );
};

export default unit1_1;
