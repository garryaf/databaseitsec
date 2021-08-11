import React, { Component } from "react";
import Loader from "../../Loader/Loader";
import TextViewItem from "../../FormItems/items/TextViewItem";
import ImagesViewItem from "../../FormItems/items/ImagesViewItem";
import Widget from "../../Widget/Widget";

class UsersView extends Component {
  renderView() {
    const { record } = this.props;

    return (
      <Widget className="widget-p-md">
        <div className="headline-2 mb-4">
          User View
        </div>

        <ImagesViewItem
          label={'Avatar'}
          value={record.avatar}
        />

        <TextViewItem
          label={'First name'}
          value={record.firstName}
        />

        <TextViewItem
          label={'Last Name'}
          value={record.lastName}
        />

        <TextViewItem
          label={'Phone number'}
          value={record.phoneNumber}
        />

        <TextViewItem
          label={'Email'}
          value={record.email}
        />

        <TextViewItem
          label={'Disabled'}
          value={record.disabled}
        />

      </Widget>
    );
  }

  render() {
    const { record, loading } = this.props;

    if (loading || !record) {
      return <Loader/>;
    }

    return this.renderView();
  }
}

export default UsersView;
