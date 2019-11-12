import React from "react";
import { Row, Container, Spinner, Col, Badge, Form, Button } from "react-bootstrap";

// import SearchBar from "./searchBar";
import PropTypes from "prop-types";

function CreateDoc({ onHandleChange, onButtonClick, value }) {
    let valueIs = value.title ? value.title : "";
    return (
        <Container className="search-area" data-test="SearchArea" >
            <Form.Group as={Row} controlId="formBasicPassword">
                <Col sm="6">
                    <Form.Control type="text" size="lg" placeholder="Enter the docuement name." name="title" onChange={onHandleChange} />
                </Col>
                <Col sm="3">
                    <Button variant="primary" onClick={onButtonClick}>
                        create
          </Button>
                </Col>
            </Form.Group>
        </Container >
    );
}
// SearchArea.defaultProps = {
//     // onHandleChange:
// };
// SearchArea.propTypes = {
//     onHandleChange: PropTypes.func.isRequired
// };
export default CreateDoc;
