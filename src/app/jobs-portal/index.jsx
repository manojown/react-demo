import React from "react";
import { Row, Container, Spinner, Col, Badge } from "react-bootstrap";
import { JobListing, SearchComponent } from "./components/";
import { JobPortalState } from "../models/";
import Helper from "../_shared/helpers/utility";
import API from "../_shared/services/apiCall";
import Pagination from "react-js-pagination";

export default class JobPortal extends React.Component {
  constructor(props) {
    super(props);
    this.state = new JobPortalState();
    this.handlePageChange = this.handlePageChange.bind(this);
    this.onHandleChange = this.onHandleChange.bind(this);
  }
  async componentDidMount() {
    try {
      let apiData = await API.getJobs();
      this.setState({
        jobs: apiData.data,
        searchJob: apiData.data,
        paginateJob: apiData.data.slice(0, this.state.itemsCountPerPage),
        totalJob: apiData.len
      });
      this.handlePageChange(this.state.activePage);
    } catch (error) {
      throw error;
    }
  }
  async onHandleChange(event) {
    let input = this.state.search;
    input[event.target.name] = event.target.value;

    let res = Helper.search(this.state.jobs, input);
    await this.setState({
      search: input,
      searching: false,
      searchJob: res,
      paginateJob: res.slice(0, this.state.itemsCountPerPage)
    });
    this.handlePageChange(1);
  }
  handlePageChange(ev) {
    let jobsAre = Helper.paginateJob(
      this.state.searchJob,
      ev,
      this.state.itemsCountPerPage
    );
    this.setState({ activePage: ev, paginateJob: jobsAre });
  }
  render() {
    let jobListing =
      this.state.totalJob && !this.state.searching ? (
        <JobListing jobs={this.state.paginateJob} />
      ) : (
        <Spinner animation="grow" size="lg" variant="dark" />
      );
    return (
      <Container>
        <SearchComponent onHandleChange={this.onHandleChange} />
        <hr />

        <div style={{ overflow: "scroll", height: "55vh" }}>{jobListing}</div>
        <hr />

        <Row>
          <Col>
            <Pagination
              prevPageText="prev"
              nextPageText="next"
              firstPageText="first"
              lastPageText="last"
              activePage={this.state.activePage}
              itemsCountPerPage={this.state.itemsCountPerPage}
              totalItemsCount={
                this.state.searchJob
                  ? this.state.searchJob.length
                  : this.state.totalJob
              }
              onChange={this.handlePageChange}
            />
          </Col>
          <Col>
            <h1>
              <Badge variant="secondary">
                {this.state.searchJob ? this.state.searchJob.length : 0} Jobs
              </Badge>
            </h1>
          </Col>
        </Row>
      </Container>
    );
  }
}
