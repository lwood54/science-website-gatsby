import React from "react";
import Navigationbar from "../components/Navigation/Navbar";

const Layout = ({ children }) => {
      return (
            <div>
                  <Navigationbar />
                  {children}
            </div>
      );
};

export default Layout;
