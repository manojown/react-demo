import React from "react";
import PropTypes from "prop-types";
// or less ideally
// import { Button, Navbar, Container } from "react-bootstrap";

function Header({ text }) {
  return (
    <header className="App-header" data-test="headerComponent">
      <h2>{text}</h2>
    </header>
  );
}
Header.defaultProps = {
  text: "Jobs Searching"
};
Header.propTypes = {
  text: PropTypes.string
};
export default Header;
