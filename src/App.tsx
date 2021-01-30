import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Header } from "./components";
import { Latest, Pinned, Browse } from "./views";

import { Container } from "@material-ui/core";

const App: React.FC = () => (
  <Container maxWidth={false}>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Latest} />
        <Route exact path="/pinned" component={Pinned} />
        <Route exact path="/browse" component={Browse} />
      </Switch>
    </Router>
  </Container>
);

export default App;
