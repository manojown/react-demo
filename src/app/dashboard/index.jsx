import React from "react";
import { Row, Container, Spinner, Col, Badge, Form, Button } from "react-bootstrap";
import { DocListing, SearchComponent, EditDocument, CreateDoc } from "./components";
import Header from '../_shared/components/Header'
import APICALL from '../_shared/services/apiCall'
import Edit from './components/editDoc'
import { JobPortalState } from "../models";
import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:3001');


// }
export default class JobPortal extends React.Component {
  constructor(props) {
    super(props);
    this.state = new JobPortalState();

  }
  async componentDidMount() {

  }



  render() {

    return (
      <>
        <Header />
        <Container style={{ "padding": "2%" }}>

          <h1>Hi new Dashboard</h1>


        </Container >
      </>
    );
  }
}
