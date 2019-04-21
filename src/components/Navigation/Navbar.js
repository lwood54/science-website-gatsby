import React from "react";
import { Link } from "gatsby";

const Navigationbar = () => {
      return (
            <div>
                  <Link to="/" className="nav-link">
                        Home
                  </Link>
                  <Link to="units/unit1_2" className="nav-link">
                        Unit 1.2
                  </Link>
            </div>
      );
};

export default Navigationbar;
