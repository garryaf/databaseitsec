import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import * as dataFormat from "./UsersDataFormatters";
import actions from "../../../actions/usersListActions";

import {
  Dropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';

import {
  BootstrapTable,
  TableHeaderColumn,
  SearchField
} from "react-bootstrap-table";

import Widget from "../../Widget/Widget";

import s from "../Users.module.scss";

class UsersListTable extends Component {
  state = {
    modalOpen: false,
    idToDelete: null,
  }

  handleDelete() {
    const userId = this.props.idToDelete;
    this.props.dispatch(actions.doDelete(userId));
  }

  openModal(cell) {
    const userId = cell;
    this.props.dispatch(actions.doOpenConfirm(userId))
  }

  closeModal() {
    this.props.dispatch(actions.doCloseConfirm());
  }

  actionFormatter(cell) {
    return (
      <div className={`d-flex justify-content-between`}>
        <Button
          className={s.controlBtn}
          color="info"
          size="xs"
          onClick={() => this.props.dispatch(push(`/admin/users/${cell}`))}
        >
          View
        </Button>
        <Button
          className={s.controlBtn}
          color="success"
          size="xs"
          onClick={() => this.props.dispatch(push(`/admin/users/${cell}/edit`))}
        >
          Edit
        </Button>
        <Button
          className={s.controlBtn}
          color="danger"
          size="xs"
          onClick={() => this.openModal(cell)}
        >
          Delete
        </Button>
      </div>
    )
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(actions.doFetch({}));
  }

  renderSizePageDropdown = (props) => {
    const limits = [];
    props.sizePerPageList.forEach((limit) => {
      limits.push(<DropdownItem key={limit} onClick={() => props.changeSizePerPage(limit)}>{ limit }</DropdownItem>)
    });

    return (
      <Dropdown isOpen={props.open} toggle={props.toggleDropDown}>
        <DropdownToggle color="default" caret>
          { props.currSizePerPage }
        </DropdownToggle>
        <DropdownMenu>
          { limits }
        </DropdownMenu>
      </Dropdown>
    );
  };

  createCustomSearchField = (props) => {
    return (
      <SearchField
        className="mb-sm-5 mr-sm-0"
        placeholder="Search"
      />
    );
  }

  render() {
    const { rows } = this.props;

    const options = {
      sizePerPage: 10,
      paginationSize: 5,
      searchField: this.createCustomSearchField,
      sizePerPageDropDown: this.renderSizePageDropdown,
    };

    return (
      <Widget className="widget-p-md">
        <p className="headline-2">Users</p>
        <div>
          <BootstrapTable bordered={false} data={rows} version="4" pagination options={options} search className="table-responsive pagination-borderless" tableContainerClass={`table-responsive table-striped ${s.usersListTableMobile}`}>
            <TableHeaderColumn dataField="avatars" dataSort dataFormat={dataFormat.imageFormatter}>
              <span className="fs-sm">Avatar</span>
            </TableHeaderColumn>

            <TableHeaderColumn dataField="firstName" dataSort>
              <span className="fs-sm">First Name</span>
            </TableHeaderColumn>

            <TableHeaderColumn dataField="lastName" dataSort>
              <span className="fs-sm">Last Name</span>
            </TableHeaderColumn>

            <TableHeaderColumn dataField="phoneNumber" dataSort>
              <span className="fs-sm">Phone Number</span>
            </TableHeaderColumn>

            <TableHeaderColumn dataField="email" dataSort>
              <span className="fs-sm">E-mail</span>
            </TableHeaderColumn>

            <TableHeaderColumn dataField="role" dataSort>
              <span className="fs-sm">Role</span>
            </TableHeaderColumn>

            <TableHeaderColumn dataField="disabled" dataSort dataFormat={dataFormat.booleanFormatter}>
              <span className="fs-sm">Disabled</span>
            </TableHeaderColumn>

            <TableHeaderColumn isKey dataField="id" dataFormat={this.actionFormatter.bind(this)}>
              <span className="fs-sm">Actions</span>
            </TableHeaderColumn>
          </BootstrapTable>
        </div>
      </Widget>
    )
  }
}

function mapStateToProps(store) {
  return {
    loading: store.users.list.loading,
    rows: store.users.list.rows,
    modalOpen: store.users.list.modalOpen,
    idToDelete: store.users.list.idToDelete,
  };
}

export default connect(mapStateToProps)(UsersListTable);
