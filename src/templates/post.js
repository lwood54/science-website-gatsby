import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";

const PostTemplate = props => {
      const post = props.data.wordpressPost;

      return (
            <div>
                  <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
                  <h2 dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
      );
};

PostTemplate.propTypes = {
      data: PropTypes.object.isRequired,
      edges: PropTypes.array,
};

export default PostTemplate;

export const pageQuery = graphql`
      query($id: String!) {
            wordpressPost(id: { eq: $id }) {
                  title
                  content
            }
            site {
                  siteMetadata {
                        title
                  }
            }
      }
`;
