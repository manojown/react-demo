import React from "react";
import PropTypes from "prop-types";

import JobCard from "../JobCard";
import { Row, Container } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

function JobListing({ jobs }) {
  let jobsAre = jobs.map(job => <JobCard job={job} key={job.id} />);
  return (
    <Container data-test="JobListing">
      <Row>{jobsAre}</Row>
    </Container>
  );
}
JobListing.defaultProps = {};
JobListing.propTypes = {
  jobs: PropTypes.array.isRequired
};
export default JobListing;
