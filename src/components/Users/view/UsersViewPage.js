import React, { Component, useEffect } from "react";
import UsersView from "./UsersView";
import actions from "../../../actions/usersFormActions";
import { connect } from "react-redux";

const UsersPage = (props) => {
  useEffect(() => {
    const { dispatch, match } = props;
    dispatch(actions.doFind(match.params.id));
  })

  return (
    <>
      <UsersView
        loading={props.loading}
        record={props.record}
      />
    </>
  )
}

function mapStateToProps(store) {
  return {
    loading: store.users.form.loading,
    record: store.users.form.record,
  };
}

export default connect(mapStateToProps)(UsersPage)
