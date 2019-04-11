import React from "react";
import Layout from "../components/layout";

const NotesTemplate = ({ children }) => {
      return (
            <Layout>
                  <h1>Notes Page</h1>
                  {children}
            </Layout>
      );
};

export default NotesTemplate;
