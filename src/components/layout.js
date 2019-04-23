import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/styles";
import theme from "../../src/theme";
import Navbar from "../components/Navigation/Navbar";
import "./layout.module.scss";

const TopLayout = props => {
      return (
            <React.Fragment>
                  <Helmet>
                        <meta
                              name="viewport"
                              content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
                        />
                        <link
                              href="https://fonts.googleapis.com/css?family=Roboto:400,500,700"
                              rel="stylesheet"
                        />
                        <link
                              href="https://fonts.googleapis.com/css?family=Exo:400,500,700,900,900i"
                              rel="stylesheet"
                        />
                  </Helmet>
                  <ThemeProvider theme={theme}>
                        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                        <CssBaseline />
                        <Navbar />
                        {props.children}
                  </ThemeProvider>
            </React.Fragment>
      );
};

TopLayout.propTypes = {
      children: PropTypes.node,
};

export default TopLayout;
