import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import LoginPage from "./pages/login/LoginPage";
import NotFoundPage from "./pages/not_found/NotFoundPage";
import UserPage from "./pages/users/UserPage";
import Header from "./common/header/Header";

export class Main extends React.Component {
  render() {
    return (
      <div className="home-page">
        <div className="home-page--header">
          <Header />
        </div>
        <div className="container">
          <Switch>
            <Route exact path="/" component={UserPage} />
            <Route path="/login" component={LoginPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(Main);
