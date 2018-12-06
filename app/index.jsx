import "babel-polyfill";
import React from "react";
import { render } from "react-dom";
import store, { history } from "./store";
import App from "./components/App";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "./styles/styles.scss";

render(<App store={store} history={history} />, document.getElementById("app"));
