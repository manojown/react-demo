import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom'

import { Button, FormGroup, FormControl, Label } from "react-bootstrap";
// or less ideally
// import { Button, Navbar, Container } from "react-bootstrap";

function Registeration(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [lName, setlName] = useState("");
    const [fName, setfName] = useState("");



    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }
    return (
        <div className="auth-wrapper">
            <div className="auth-inner">
                <h3>Sign In</h3>
                <form onSubmit={handleSubmit}>
                    <FormGroup controlId="email" bsSize="large" className="form-group">
                        <label>Email</label>
                        <FormControl className="form-control"
                            autoFocus
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup controlId="fName" bsSize="large" className="form-group">
                        <label>First Name</label>
                        <FormControl className="form-control"
                            autoFocus
                            type="fName"
                            value={fName}
                            onChange={e => setfName(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup controlId="lName" bsSize="large" className="form-group">
                        <label>Last Name</label>
                        <FormControl className="form-control"
                            autoFocus
                            type="lName"
                            value={lName}
                            onChange={e => setlName(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                        <label>Password</label>
                        <FormControl
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            type="password"
                        />
                    </FormGroup>
                    <Button block bsSize="large" className="btn btn-primary btn-block" disabled={!validateForm()} type="submit">
                        Registeration
        </Button>
                    <p className="forgot-password text-right">
                        <Link to="/login">Login?</Link>
                    </p>
                </form>

            </div>
        </div>
    );
}
Registeration.defaultProps = {
    text: "Admin Panel"
};
Registeration.propTypes = {
    text: PropTypes.string
};
export default Registeration;
