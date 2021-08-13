import React  from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
// import FormikInput from "./components/FormikInput";
// import FormikCheckbox from "./components/FormikCheckbox";
// import FormikSelect from "./components/FormikSelect";

import {
  Button,
  FormGroup,
  Input
} from "reactstrap";

/*
TODO: - Refactor this page using default components
      - Delete custom components folder
 */
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  passwordConfirmation: "",
  acceptedTerms: false,
  jobType: "",
};

class FormikForm extends React.Component {
  render() {
    return (
      <>
        <h2 className="mt-4">Subscribe!</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={Yup.object({
            firstName: Yup.string()
              .max(15, "Must be 15 characters or less")
              .required("Required"),
            lastName: Yup.string()
              .max(20, "Must be 20 characters or less")
              .required("Required"),
            email: Yup.string()
              .email("Invalid email addresss`")
              .required("Required"),
            password: Yup.string()
              .min(8, 'Password is too short - should be 8 chars minimum.')
              .required("Required"),
            passwordConfirmation: Yup.string()
              .oneOf([Yup.ref('password'), null], 'Passwords must match'),
            acceptedTerms: Yup.boolean()
              .required("Required")
              .oneOf([true], "You must accept the terms and conditions."),
            jobType: Yup.string()
              .oneOf(
                ["designer", "development", "product", "other"],
                "Invalid Job Type"
              )
              .required("Required")
          })}
          onSubmit={async (values, { setSubmitting }) => {
            await new Promise(r => setTimeout(r, 500));
            setSubmitting(false);
          }}
          render={(form) => {
            return (
              <form>
                <Field
                  name="firstName"
                  type="text"
                  placeholder="Jane"
                  render={() => (
                    <div className="form-group">
                      <label xs={12} htmlFor="firstName" className="col-form-label">First Name</label>
                      <input
                        xs={12}
                        id="firstName"
                        type="text"
                        value=""
                        className="form-control"
                        onChange={(event) => {
                          form.setFieldValue(initialValues.firstName, event.target.value);
                          form.setFieldTouched(initialValues.firstName);
                        }}
                      />
                    </div>
                  )}
                />
                <Field
                  name="lastName"
                  type="text"
                  placeholder="Doe"
                  render={() => (
                    <div className="form-group">
                      <label xs={12} htmlFor="lastName" className="col-form-label">Last Name</label>
                      <input xs={12} id="lastName" type="text" value="" className="form-control"/>
                    </div>
                  )}
                />
                <Field
                  name="email"
                  type="email"
                  placeholder="jane@formik.com"
                  render={() => (
                    <div className="form-group">
                      <label xs={12} htmlFor="email" className="col-form-label">Email Address</label>
                      <input xs={12} id="email" type="text" value="" className="form-control"/>
                    </div>
                  )}
                />
                <Field
                  name="password"
                  type="password"
                  placeholder=""
                  render={() => (
                    <div className="form-group">
                      <label xs={12} htmlFor="password" className="col-form-label">Password</label>
                      <input xs={12} id="password" type="text" value="" className="form-control"/>
                    </div>
                  )}
                />
                <Field
                  name="passwordConfirmation"
                  type="password"
                  placeholder=""
                  render={() => (
                    <div className="form-group">
                      <label xs={12} htmlFor="passwordConfirmation" className="col-form-label">Confirm Password</label>
                      <input xs={12} id="password" type="text" value="" className="form-control"/>
                    </div>
                  )}
                />
                <div className="d-flex justify-content-between mt-4">
                  <Button color="primary" type="submit">Submit</Button>
                  <Button color="secondary" type="reset">Cancel</Button>
                </div>
              </form>
            )
          }}
        />
      </>
    )
  }
}
// export default function FormikForm() {
//
//   return (
//     <>
//       <h2 className="mt-4">Subscribe!</h2>
//       <Formik
//         initialValues={{
//           firstName: "",
//           lastName: "",
//           email: "",
//           password: "",
//           passwordConfirmation: "",
//           acceptedTerms: false,
//           jobType: "",
//         }}
//         validationSchema={Yup.object({
//           firstName: Yup.string()
//             .max(15, "Must be 15 characters or less")
//             .required("Required"),
//           lastName: Yup.string()
//             .max(20, "Must be 20 characters or less")
//             .required("Required"),
//           email: Yup.string()
//             .email("Invalid email addresss`")
//             .required("Required"),
//           password: Yup.string()
//             .min(8, 'Password is too short - should be 8 chars minimum.')
//             .required("Required"),
//           passwordConfirmation: Yup.string()
//             .oneOf([Yup.ref('password'), null], 'Passwords must match'),
//           acceptedTerms: Yup.boolean()
//             .required("Required")
//             .oneOf([true], "You must accept the terms and conditions."),
//           jobType: Yup.string()
//             .oneOf(
//               ["designer", "development", "product", "other"],
//               "Invalid Job Type"
//             )
//             .required("Required")
//         })}
//         onSubmit={async (values, { setSubmitting }) => {
//           await new Promise(r => setTimeout(r, 500));
//           setSubmitting(false);
//         }}
//       >
//         <Form>
//
//           <FormikSelect label="Job Type" name="jobType">
//             <option value="">Select a job type</option>
//             <option value="designer">Designer</option>
//             <option value="development">Developer</option>
//             <option value="product">Product Manager</option>
//             <option value="other">Other</option>
//           </FormikSelect>
//           <FormikCheckbox name="acceptedTerms">
//             I accept the terms and conditions
//           </FormikCheckbox>
//           <div className="d-flex justify-content-between mt-4">
//             <Button color="primary" type="submit">Submit</Button>
//             <Button color="secondary" type="reset">Cancel</Button>
//           </div>
//         </Form>
//       </Formik>
//     </>
//   )
// }

export default FormikForm;


