import React, { Component }  from 'react';
import { Formik } from "formik";
import Loader from "../../Loader/Loader";
import InputFormItem from "../../FormItems/items/InputFormItem";
import SwitchFormItem from "../../FormItems/items/SwitchFormItem";
import RadioFormItem from "../../FormItems/items/RadioFormItem";
import ImagesFormItem from "../../FormItems/items/ImagesFormItem";
import usersFields from "../usersFields";
import IniValues from "../../FormItems/iniValues";
import PreparedValues from "../../FormItems/preparedValues";
import FormValidations from "../../FormItems/formValidations";
import Widget from "../../Widget/Widget";

class UsersForm extends Component {
  iniValues = () => {
    return IniValues(usersFields, this.props.record || {});
  }

  formValidations = () => {
    return FormValidations(usersFields, this.props.record || {});
  }

  handleSubmit = (values) => {
    const { id, ...data } = PreparedValues(usersFields, values || {});
    this.props.onSubmit(id, data);
  };

  title = () => {
    if(this.props.isProfile) {
      return 'Edit My Profile';
    }

    return this.props.isEditing
      ? 'Edit User'
      : 'Add User';
  };

  renderForm() {
    const { saveLoading } = this.props;

    return (
      <Widget className="widget-p-md">
        <div className="headline-2 mb-4">
          {this.title()}
        </div>
        <Formik
          onSubmit={this.handleSubmit}
          initialValues={this.iniValues()}
          validationSchema={this.formValidations()}
          render={(form) => {
            return (
              <form onSubmit={form.handleSubmit}>

                <InputFormItem
                  name={'firstName'}
                  schema={usersFields}
                />

                <InputFormItem
                  name={'lastName'}
                  schema={usersFields}
                />

                <InputFormItem
                  name={'phoneNumber'}
                  schema={usersFields}
                />

                <InputFormItem
                  name={'email'}
                  schema={usersFields}
                />

                { this.props.currentUser && this.props.currentUser.role === 'admin' && !this.props.isProfile &&
                <>
                  {this.props.isProfile ? null : (
                    <>
                      <SwitchFormItem
                        name={'disabled'}
                        schema={usersFields}
                      />
                      <RadioFormItem
                        name={'role'}
                        schema={usersFields}
                      />
                    </>
                  )}
                </>
                }

                <ImagesFormItem
                  name={'avatar'}
                  schema={usersFields}
                  path={'users/avatar'}
                  fileProps={{
                    size: undefined,
                    formats: undefined,
                  }}
                  max={undefined}
                />

                <div className="form-buttons">
                  <button
                    className="mr-3 btn btn-primary"
                    disabled={saveLoading}
                    type="button"
                    onClick={form.handleSubmit}
                  >
                    Save
                  </button>{' '}{' '}

                  <button
                    className="mr-3 btn btn-secondary"
                    type="button"
                    disabled={saveLoading}
                    onClick={form.handleReset}
                  >
                    Reset
                  </button>{' '}{' '}

                  <button
                    className="mr-3 btn btn-secondary"
                    type="button"
                    disabled={saveLoading}
                    onClick={() => this.props.onCancel()}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            );
          }}
        />
      </Widget>
    );
  }

  render() {
    const { isEditing, findLoading, record } = this.props;

    if (findLoading) {
      return <Loader/>;
    }

    if (isEditing && !record) {
      return <Loader/>;
    }

    return this.renderForm();
  }
}

export default UsersForm;
