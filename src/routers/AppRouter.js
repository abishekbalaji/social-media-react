import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Landing from "../components/Landing";
import LoginPage from "../components/LoginPage";
import SignUpPage from "../components/SignUpPage";
import NotFoundPage from "../components/NotFoundPage";
import NewsFeedPage from "../components/NewsFeedPage";

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Landing} exact={true} />
      <Route path="/login" component={LoginPage} />
      <Route path="/signup" component={SignUpPage} />
      <Route path="/newsfeed/:id" component={NewsFeedPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
