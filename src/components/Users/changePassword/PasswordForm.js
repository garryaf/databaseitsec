import React  from "react";
import { Formik, Form } from "formik";
import CustomInput from "../../CustomInput/CustomInput";
import {
  Button,
} from "reactstrap";

export default function PasswordForm() {

  return (
    <>
      <Formik
        initialValues={{
          currentPassword: "",
          newPassword: "",
          confirmPassword: "",
        }}
        onSubmit={async (values, { setSubmitting }) => {
          await new Promise(r => setTimeout(r, 500));
          setSubmitting(false);
        }

        }
      >
        <Form>
          <CustomInput
            label="Current Password"
            name="currentPassword"
            type="password"
            placeholder=""
          />
          <CustomInput
            label="New Password"
            name="newPassword"
            type="password"
            placeholder=""
          />
          <CustomInput
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            placeholder=""
          />
          <div className="mt-3 d-flex justify-content-start flex-wrap">
            <Button color="primary" type="submit" className="mr-3 mt-3">Change Password</Button>
            <Button color="secondary" type="reset"  className="mt-3">Cancel</Button>
          </div>
        </Form>
      </Formik>
    </>
  )
}
