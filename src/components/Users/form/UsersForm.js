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

const UsersForm = (props) => {
  const iniValues = () => {
    return IniValues(usersFields, props.record || {});
  }

  const formValidations = () => {
    return FormValidations(usersFields, props.record || {});
  }

  const handleSubmit = (values) => {
    const { id, ...data } = PreparedValues(usersFields, values || {});
    props.onSubmit(id, data);
  };

  const title = () => {
    if(props.isProfile) {
      return 'Edit My Profile';
    }

    return props.isEditing
      ? 'Edit User'
      : 'Add User';
  };

  const { saveLoading, isEditing, findLoading, record } = props;

  const renderForm = () => {
    return (
      <Widget className="widget-p-md">
        <div className="headline-2 mb-4">
          {title()}
        </div>
        <Formik
          onSubmit={handleSubmit}
          initialValues={iniValues()}
          validationSchema={formValidations()}
        >
          {( form ) => {
            return (
              <form onSubmit={props.handleSubmit}>
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
                { props.currentUser && props.currentUser.role === 'admin' && !props.isProfile &&
                <>
                  {props.isProfile ? null : (
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
                    onClick={() => props.onCancel()}
                  >
                    Cancel
                  </button>
                </div>

              </form>
            )
          }}
        </Formik>
      </Widget>
    )
  }

  if (findLoading) {
    return <Loader/>;
  }

  if (isEditing && !record) {
    return <Loader/>;
  }

  return renderForm();

}

export default UsersForm;
