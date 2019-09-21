import React from "react";
import locationIcon from "../../../../styles/icons/location.svg";
import exp from "../../../../styles/icons/exp.svg";
import sourceImg from "../../../../styles/icons/source.svg";
import salaryImg from "../../../../styles/icons/salary.svg";
import skillsImg from "../../../../styles/icons/settings.svg";
import PropTypes from "prop-types";

import { Button, Card, Row, Col } from "react-bootstrap";

function JobCard({ job }) {
  let {
    startdate,
    enddate,
    id,
    title,
    companyname,
    location,
    experience,
    source,
    salary,
    applylink,
    skills,
    jd
  } = job;

  let dateComp =
    startdate || enddate ? (
      <p>
        <strong className="secondary-info">{startdate}</strong>
        <strong className="secondary-info">Expire On - {enddate}</strong>
      </p>
    ) : (
      ""
    );

  return (
    <Col
      xs={12}
      md={6}
      sm={12}
      className="jobCard"
      key={id}
      data-test="JobCard"
    >
      <Card>
        <Row>
          <Col>
            <Row>
              <div className="card-body">
                <h5>{title}</h5>
                <p>
                  <label className="at-label">at </label>
                  <strong className="company-name">
                    {companyname ? companyname : "N/A"}
                  </strong>
                </p>
                {dateComp}
                <hr />
                <p>
                  <img
                    src={locationIcon}
                    alt="location"
                    className="secondary-icon"
                  />
                  <strong className="secondary-info">
                    {location ? location : "N/A"}
                  </strong>
                  <img src={exp} alt="experience" className="secondary-icon" />

                  <strong className="secondary-info">
                    {experience ? experience : "N/A"}
                  </strong>
                  <img
                    src={sourceImg}
                    alt="source"
                    className="secondary-icon"
                  />

                  <strong className="secondary-info">
                    {source ? source : "N/A"}
                  </strong>
                  <img
                    src={salaryImg}
                    alt="salary"
                    className="secondary-icon"
                  />

                  <strong className="secondary-info">
                    {salary ? salary : "N/A"}
                  </strong>
                </p>
                <p>
                  <img
                    src={skillsImg}
                    alt="skills"
                    className="secondary-icon"
                  />
                  <strong className="secondary-info">
                    {skills ? skills : "N/A"}
                  </strong>
                </p>
                <div>
                  <p style={{ height: "80px", overflow: "scroll" }}>{jd}</p>
                </div>
              </div>
            </Row>
            <a href={applylink}>
              <Button className="apply-info">Apply Now</Button>
            </a>
          </Col>
        </Row>
        <Card.Body />
      </Card>
    </Col>
  );
}
// JobCard.defaultProps = {
//   job: []
// };
JobCard.prototype = {
  job: PropTypes.shape({
    id: PropTypes.bool.isRequired.isRequired,
    startdate: PropTypes.string.isRequired,
    enddate: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    companyname: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    experience: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
    salary: PropTypes.string.isRequired,
    skills: PropTypes.string.isRequired,
    jd: PropTypes.string.isRequired,
    applylink: PropTypes.string.isRequired
  })
};
export default JobCard;
