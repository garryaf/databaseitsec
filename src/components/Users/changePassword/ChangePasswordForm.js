import React, { Component } from "react";
import { Formik, Form, useField } from "formik";
import Loader from "../../Loader/Loader";
import InputFormItem from "../../FormItems/items/InputFormItem";
import Widget from "../../Widget/Widget";

// class UsersForm extends Component {
//   handleSubmit = (values) => {
//     const { ...data } = values || {};
//     this.props.onSubmit(data);
//   };
//
//   title = () => {
//     return 'Change Password';
//   };
//
//   passwordSchema = {
//     currentPassword: { type: 'string', label: 'Current Password' },
//     newPassword: { type: 'string', label: 'New Password' },
//     confirmNewPassword: { type: 'string', label: 'Confirm new Password' },
//   };
//
//   renderForm() {
//     const { saveLoading } = this.props;
//
//     return (
//       <Widget className="widget-p-md">
//         <Formik
//           onSubmit={this.handleSubmit}
//           render={(form) => {
//             return (
//               <form onSubmit={form.handleSubmit}>
//
//                 <InputFormItem
//                   name={'currentPassword'}
//                   password
//                   schema={this.passwordSchema}
//                 />
//
//                 <InputFormItem
//                   name={'newPassword'}
//                   schema={this.passwordSchema}
//                   password
//                 />
//
//                 <InputFormItem
//                   name={'confirmNewPassword'}
//                   schema={this.passwordSchema}
//                   password
//                 />
//                 <div>
//                   <button
//                     className="btn btn-primary mr-3"
//                     disabled={saveLoading}
//                     type="button"
//                     onClick={form.handleSubmit}
//                   >
//                     {' '}
//                     Change Password
//                   </button>{' '}
//
//                   <button
//                     className="btn btn-secondary"
//                     type="button"
//                     disabled={saveLoading}
//                     onClick={() => this.props.onCancel()}
//                   >
//                     {' '}
//                     Cancel
//                   </button>
//                 </div>
//               </form>
//             );
//           }}
//         />
//       </Widget>
//     );
//   }
//
//   render() {
//     const { isEditing, findLoading, record } = this.props;
//
//     if (findLoading) {
//       return <Loader />;
//     }
//
//     if (isEditing && !record) {
//       return <Loader />;
//     }
//
//     return this.renderForm();
//   }
// }

///// USERS FORM COMPONENT
const MyTextInput = ({ label, ...props}) => {
  const [field, meta] = useField(props);
  console.log("++++++")
  console.log(props)
  console.log("=====")
  console.log(field)
  console.log("XXXXXXXX")
  console.log(meta)
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="form-control" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  )
};

const UsersForm = (props) => {
  const handleSubmit = (values) => {
    console.log("--------")
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
        onSubmit={values => handleSubmit(values)}
      >
        <Form>
          <InputFormItem
            name={'currentPassword'}
            password
            schema={passwordSchema}
          />

          <InputFormItem
            name={'newPassword'}
            schema={passwordSchema}
            password
          />

          <InputFormItem
            name={'confirmNewPassword'}
            schema={passwordSchema}
            password
          />
          <div>
            <button
              className="btn btn-primary mr-3"
              disabled={saveLoading}
              type="submit"
            >
              {' '}
              Change Password
            </button>{' '}

            <button
              className="btn btn-secondary"
              type="button"
              disabled={saveLoading}
              onClick={() => props.onCancel()}
            >
              {' '}
              Cancel
            </button>
          </div>
        </Form>

      </Formik>
    </Widget>
  );
}

export default UsersForm;
