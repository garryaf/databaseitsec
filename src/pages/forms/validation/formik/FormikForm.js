import React  from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikInput from "./components/FormikInput";
import FormikCheckbox from "./components/FormikCheckbox";
import FormikSelect from "./components/FormikSelect";
import {
  Button,
} from "reactstrap";

export default function FormikForm() {

  return (
    <>
      <h2 className="mt-4">Subscribe!</h2>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          passwordConfirmation: "",
          acceptedTerms: false,
          jobType: "",
        }}
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
      >
        <Form>
          <FormikInput
            label="First Name"
            name="firstName"
            type="text"
            placeholder="Jane"
          />
          <FormikInput
            label="Last Name"
            name="lastName"
            type="text"
            placeholder="Doe"
          />
          <FormikInput
            label="Email Address"
            name="email"
            type="email"
            placeholder="jane@formik.com"
          />
          <FormikInput
            label="Password"
            name="password"
            type="password"
            placeholder=""
          />
          <FormikInput
            label="Confirm password"
            name="passwordConfirmation"
            type="password"
            placeholder=""
          />
          <FormikSelect label="Job Type" name="jobType">
            <option value="">Select a job type</option>
            <option value="designer">Designer</option>
            <option value="development">Developer</option>
            <option value="product">Product Manager</option>
            <option value="other">Other</option>
          </FormikSelect>
          <FormikCheckbox name="acceptedTerms">
            I accept the terms and conditions
          </FormikCheckbox>
          <div className="d-flex justify-content-between mt-4">
            <Button color="primary" type="submit">Submit</Button>
            <Button color="secondary" type="reset">Cancel</Button>
          </div>
        </Form>
      </Formik>
    </>
  )
}


