import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, FormGroup, FormControl, Label } from "react-bootstrap";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

// or less ideally
// import { Button, Navbar, Container } from "react-bootstrap";

function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
                    <FormGroup controlId="password" bsSize="large">
                        <label>Password</label>
                        <FormControl
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            type="password"
                        />
                    </FormGroup>
                    <Button block bsSize="large" className="btn btn-primary btn-block" disabled={!validateForm()} type="submit">
                        Login
        </Button>
                    <p className="forgot-password text-right">
                        <Router>
                            Forgot <Link to="/register">register?</Link>
                        </Router>
                    </p>
                </form>

            </div>
        </div>
    );
}
Login.defaultProps = {
    text: "Admin Panel"
};
Login.propTypes = {
    text: PropTypes.string
};
export default Login;
