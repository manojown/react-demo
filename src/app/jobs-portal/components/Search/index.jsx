import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SearchBar from "./searchBar";
import PropTypes from "prop-types";

function SearchArea({ onHandleChange }) {
  return (
    <Container className="search-area" data-test="SearchArea">
      <Row>
        <Col>
          <SearchBar
            placeholder="Enter your experience"
            name="exp"
            type="number"
            onChange={onHandleChange}
          />
        </Col>

        <Col>
          <SearchBar
            placeholder="Enter your Skills"
            name="skills"
            onChange={onHandleChange}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <SearchBar
            placeholder="Enter your Locations"
            name="loc"
            onChange={onHandleChange}
          />
        </Col>
        <Col>
          <SearchBar
            placeholder="Search by Company name"
            name="company"
            onChange={onHandleChange}
          />
        </Col>
        <Col>
          <label className="customcheck">
            Expire jobs
            <input
              type="checkbox"
              name="expire"
              // value={state.search.expire}
              onChange={event => {
                if (event.target.value === "true") {
                  event.target.value = false;
                } else event.target.value = true;

                return onHandleChange(event);
              }}
            />
            <span className="checkmark" />
          </label>
        </Col>
      </Row>
    </Container>
  );
}
SearchArea.defaultProps = {
  // onHandleChange:
};
SearchArea.propTypes = {
  onHandleChange: PropTypes.func.isRequired
};
export default SearchArea;
