import React from "react";
import MainComponent from "./dashboard";
import Login from "./_shared/components/Login"
import EditDocument from "./dashboard/components/EditDocument";
import { Route, Link, Redirect, BrowserRouter as Router, Switch } from 'react-router-dom'
import { Row, Container, Spinner, Col, Badge, Form, Button } from "react-bootstrap";
import { DefaultRoutes } from "./routes"
import { Header, ErrorBoundries, Error404 } from "./_shared/components";


function App() {
  console.log("Called", DefaultRoutes)
  localStorage.setItem("key", "sdasvgdavgvghvgh")
  const withoutAuthRoutes = DefaultRoutes.map(({ component, path, exact, authRequire }) => {

    if (!authRequire) return <Route path={path} component={component} exact={exact} />

  })

  const withAuthRoutes = DefaultRoutes.map(({ component, path, exact, authRequire }) => {

    if (authRequire) return <Route path={path} component={component} exact={exact} />

  })

  const isAuthenticate = localStorage.getItem("key")
  // const defaultRoute = isAuthenticate ? MainComponent : Login

  const conditionalRoutes = isAuthenticate ? withAuthRoutes : withoutAuthRoutes
  return (
    <div className="App" data-test="App">
      <ErrorBoundries>

        <Router>
          <Switch>
            {conditionalRoutes}
            <Redirect from="/login" to="/" />
            <Redirect from="/register" to="/" />

            <Route component={Error404} />
          </Switch>
        </Router>

      </ErrorBoundries>
    </div>
  );
}

export default App;
