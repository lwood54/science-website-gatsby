import React from "react";
import { Link } from "gatsby";
import { Navbar, Nav, NavItem } from "reactstrap";

const Navigationbar = () => {
      return (
            <div>
                  <Navbar
                        light
                        expand="md"
                        style={{ backgroundColor: "#2196f3" }}
                  >
                        <Nav className="ml-auto" navbar>
                              <NavItem>
                                    <Link to="/" className="nav-link">
                                          Home
                                    </Link>
                              </NavItem>
                              <NavItem>
                                    <Link
                                          to="units/unit1_2"
                                          className="nav-link"
                                    >
                                          Unit 1.2
                                    </Link>
                              </NavItem>
                        </Nav>
                  </Navbar>
            </div>
      );
};

export default Navigationbar;
