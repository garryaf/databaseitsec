import React, { Component } from "react";
import { Alert } from "reactstrap";
import cx from "classnames";
import UsersListTable from "./UsersListTable";

import s from "../Users.module.scss";

class UsersListPage extends Component {

  state = {
    promoAlert: false,
  };

  componentDidMount() {
    setTimeout(() => {
      this.showPromoAlert();
    }, 100);
  }

  showPromoAlert() {
    this.setState({ promoAlert: true });
  }

  render() {
    return (
      <div>
        <div className="page-top-line">
          <h2 className="page-title">User <span className="fw-semi-bold">Management</span></h2>
          <Alert
            color="primary"
            className={cx(s.promoAlert, {[s.showAlert]: this.state.promoAlert})}
          >
            This page is only available in <a className="text-white font-weight-bold" rel="noreferrer noopener" href="https://flatlogic.com/admin-dashboards/sing-app-react-node-js" target="_blank">Sing App React with Node.js</a> integration!
          </Alert>
        </div>
        <UsersListTable />
      </div>
    );
  }
}

export default UsersListPage;
