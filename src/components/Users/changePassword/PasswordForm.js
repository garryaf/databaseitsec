import React, { useEffect } from "react";
import { Formik, Form, useField } from "formik";
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
          <div className="d-flex justify-content-between mt-4">
            <Button color="primary" type="submit">Change Password</Button>
            <Button color="secondary" type="reset">Cancel</Button>
          </div>
        </Form>
      </Formik>
    </>
  )
}
