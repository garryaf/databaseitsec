import React, { Component } from "react";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import Loader from "../../Loader/Loader";
import InputFormItem from "../../FormItems/items/InputFormItem";
import Widget from "../../Widget/Widget";

const UsersForm = (props) => {
  const handleSubmit = (values) => {
    console.log("DATA VALUES")
    console.log(values)
    const { ...data } = values || {};
    props.onSubmit(data);
  }

  const passwordSchema = {
    currentPassword: { type: 'string', label: 'Current Password' },
    newPassword: { type: 'string', label: 'New Password' },
    confirmNewPassword: { type: 'string', label: 'Confirm new Password' },
  }

  const { saveLoading, isEditing, findLoading, record } = props;

  if (findLoading) {
    return <Loader/>
  }
  if (isEditing && !record) {
    return <Loader/>
  }
  return (
    <Widget className="widget-p-md">
      <Formik
        initialValues={{
          currentPassword: '',
          newPassword: '',
          confirmNewPassword: '',
        }}
        validationSchema={Yup.object({
          currentPassword: Yup.string()
            .min(2, "Must be 2 characters or more")
            .required("Required"),
          newPassword: Yup.string()
            .min(2, "Must be 2 characters or more")
            .required("Required"),
          confirmNewPassword: Yup.string()
            .oneOf([Yup.ref('newPassword'), null], 'Password must match')
            .required("No password provided")
        })}
        onSubmit={values => handleSubmit(values)}
      >
        <Form>
          <InputFormItem
            name={'currentPassword'}
            password
            schema={passwordSchema}
            required
          />

          <InputFormItem
            name={'newPassword'}
            schema={passwordSchema}
            password
            required
          />

          <InputFormItem
            name={'confirmNewPassword'}
            schema={passwordSchema}
            password
            required
          />
          <div className="mt-4">
            <button
              className="btn btn-primary mr-3"
              disabled={saveLoading}
              type="submit"
            >
              Change Password
            </button>
            <button
              className="btn btn-secondary"
              type="button"
              disabled={saveLoading}
              onClick={() => props.onCancel()}
            >
              Cancel
            </button>
          </div>
        </Form>

      </Formik>
    </Widget>
  );
}

export default UsersForm;
