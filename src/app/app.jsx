import React from "react";
import MainComponent from "./jobs-portal";
import { Header, ErrorBoundries } from "./_shared/components";

function App() {
  return (
    <div className="App" data-test="App">
      <ErrorBoundries>
        <Header className="navbar" />
        <MainComponent />
      </ErrorBoundries>
    </div>
  );
}

export default App;
