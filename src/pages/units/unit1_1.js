import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import NotesTemplate from "../../templates/NotesTemplate";
import sev8B from "../../components/TEKS/sev8B/sev8B";

// export const query = graphql``;

const unit1_1 = () => {
      return (
            <Layout>
                  <h1>Unit 1.1</h1>
                  <NotesTemplate content={sev8B} />
            </Layout>
      );
};

export default unit1_1;
