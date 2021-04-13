import React, { Fragment } from "react";
import "./index.css"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { configure } from "@testing-library/react";
import GenerateConfig from "./components/GenerateConfig";
import Config from "./components/create-config"
import UserForm from "./components/UserForm"
import Create from "./components/create";


export default function App() {
  return (
  <Router>
    <main>
      {/* <Create></Create> */}
      {/* <Config></Config> */}
      <GenerateConfig></GenerateConfig>
    </main>
</Router>
  );
}

const Home = () => (
  <Fragment>
    <h1>Home</h1>
  </Fragment>
  );

const Requests = () => (
  <Fragment>
    <h1>View current TKG Requests</h1>
  </Fragment>
  );

// const Configs = () => (
//   <Fragment>
//     <h1>Create a TKssG Config</h1>
//     <p gyvytv />
//   </Fragment>
//   );