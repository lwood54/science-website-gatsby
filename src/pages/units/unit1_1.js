import React from "react";
import Layout from "../../components/layout";
import NotesTemplate from "../../templates/NotesTemplate";
import sev8B from "../../components/TEKS/sev8B";

const unit1_1 = () => {
      return (
            <Layout>
                  <h1>Unit 1.1</h1>
                  <NotesTemplate content={sev8B} />
            </Layout>
      );
};

export default unit1_1;