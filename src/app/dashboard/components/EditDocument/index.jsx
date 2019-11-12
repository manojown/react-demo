import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
// import SearchBar from "./searchBar";
import PropTypes from "prop-types";
// }

function EditDocument({ value, onChange }) {
    // console.log(":: valueAsdasdasdasd::: ", props)
    let valueIs = value ? value : " "

    // console.log("title", title, body)
    // body = body ? body : "";
    return (
        <Container data-test="SearchArea">
            <Row>
                <Form.Control as="textarea" className="textarea" name="body" value={valueIs} onChange={onChange} />
            </Row>

        </Container>
    );
}
// SearchArea.defaultProps = {
//     // onHandleChange:
// };
// SearchArea.propTypes = {
//     onHandleChange: PropTypes.func.isRequired
// };
export default EditDocument;
