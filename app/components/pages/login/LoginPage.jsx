import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as authActions from "../../../actions/authActions";
import LoginForm from "./LoginForm";

import "./LoginPage.scss";

export class LoginPage extends React.Component {
  static propTypes = {
    actions: PropTypes.object.isRequired
  };

  handleOnSubmit = (username, password) => {
    this.props.actions.login({ username, password });
  };

  render() {
    return (
      <section className="login-page">
        <div className="login-page--form">
          <LoginForm onSubmit={this.handleOnSubmit} />
        </div>
      </section>
    );
  }
}

export function mapStateToProps(state) {
  return {
    ...state.auth
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
