import React from "react";
import PropTypes from "prop-types";

import JobCard from "../JobCard";
import { Row, Container, ListGroup } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

function DocListing({ documents, onClick }) {
  console.log("asdasd", documents)
  let documentsAre = []
  for (let i in documents) {
    // console.log("document asdasd::")
    documentsAre.push(<span onClick={() => onClick(documents[i], i)}>{documents[i].title}</span>)
  }

  return (
    <Container data-test="JobListing">
      {documentsAre}
    </Container>
  );
}
// JobListing.defaultProps = {};
// JobListing.propTypes = {
//   jobs: PropTypes.array.isRequired
// };
export default DocListing;
