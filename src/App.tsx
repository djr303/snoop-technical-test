import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Header, Navigation } from "./components";
import { Latest, Pinned, Browse } from "./views";

import { Paths } from './common/constants'

import { Container } from "@material-ui/core";

const App: React.FC = () => (
  <Container maxWidth={false}>
    <Router>
      <Header />
      <Navigation />
      <Switch>
        <Route exact path={Paths.Latest} component={Latest} />
        <Route exact path={Paths.Pinned} component={Pinned} />
        <Route exact path={Paths.Browse} component={Browse} />
      </Switch>
    </Router>
  </Container>
);

export default App;
