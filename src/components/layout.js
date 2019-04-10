import React from "react";
import { Link } from "gatsby";

const Layout = ({ children }) => {
      return (
            <div>
                  <Link to="/">Home</Link>
                  <Link to="/unit1_1">Unit 1.1</Link>
                  <Link to="/unit1_2">Unit 1.2</Link>
                  <h1>Navigation Bar Here</h1>
                  <h3>There will also be a side drawer</h3>
                  {children}
            </div>
      );
};

export default Layout;
