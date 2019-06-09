import React from "react";

const PageTemplate = props => {
      //   const siteMetadata = props.data.site.siteMetadata;
      const currentPage = props.data.wordpressPage;

      return (
            <div>
                  <h1 dangerouslySetInnerHTML={{ __html: currentPage.title }} />
                  <h1
                        dangerouslySetInnerHTML={{
                              __html: currentPage.content,
                        }}
                  />
            </div>
      );
};

export default PageTemplate;
