import React, { Component } from 'react';
import UserForm from "./UserForm";
import { connect } from 'react-redux';
import actions from "../../../actions/usersFormActions";
import { Alert } from 'reactstrap';
import cx from 'classnames';
import Widget from "../../Widget/Widget";

import s from "../Users.module.scss";

class UserFormPage extends  Component {
  state = {
    dispatched: false,
    promoAlert: false,
  };

  showPromoAlert() {
    this.setState({promoAlert: true});
  }
  componentDidMount() {
    const { dispatch, match } = this.props;
    if (this.isEditing()) {
      dispatch(actions.doFind(match.params.id));
    }
    else {
      if (this.isProfile()) {
        const currentUser = JSON.parse(localStorage.getItem('user'));
        const currentUserId = currentUser.user.id;
        dispatch(actions.doFind(currentUserId));
      }
      else {
        dispatch(actions.doNew());
      }
    }
    this.setState({ dispatched: true });
    setTimeout(() => {
      this.showPromoAlert();
    }, 100);
  }

  doSubmit = (id, data) => {
    const { dispatch } = this.props;
    if (this.isEditing() || this.isProfile()) {
      dispatch(actions.doUpdate(id, data, this.isProfile()));
    } else {
      dispatch(actions.doCreate(data));
    }
  };

  isEditing = () => {
    const { match } = this.props;
    return !!match.params.id;
  };

  isProfile = () => {
    const { match } = this.props;
    const currentUser = JSON.parse(localStorage.getItem('user'));
    const currentUserId = currentUser.user.id;
    if (match.params.id === currentUserId) {
      return true
    }
    return match.url === '/template/edit';
  };

  render() {
    return (
      <React.Fragment>
        <div className="page-top-line">
          <h2 className="page-title">Edit Profile</h2>
          <Alert
            color="primary"
            className={cx(s.promoAlert, {[s.showAlert]: this.state.promoAlert})}
          >
            This page is only available in <a className="text-white font-weight-bold" rel="noreferrer noopener" href="https://flatlogic.com" target="_blank">Sofia React App with Node.js</a> integration!
          </Alert>
        </div>
        <Widget className="widget-p-md">
          <UserForm/>
        </Widget>
      </React.Fragment>
    );
  }
}

function mapStateToProps(store) {
  return {
    findLoading: store.users.form.findLoading,
    saveLoading: store.users.form.saveLoading,
    record: store.users.form.record,
    currentUser: store.auth.currentUser,
  };
}

export default connect(mapStateToProps)(UserFormPage);


