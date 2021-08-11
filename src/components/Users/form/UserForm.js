import React  from 'react';
import { Form, Formik } from "formik";
import { Button, Label } from "reactstrap";
import { Link } from "react-router-dom";

export default function UserForm() {

  return (
    <>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          phoneNumber: "",
          email: "",
          avatar: "",
        }}
        onSubmit={async (values, { setSubmitting }) => {
          await new Promise(r => setTimeout(r, 500));
          setSubmitting(false);
        }

        }
      >
        <Form>
          <div>Page in process</div>
        </Form>
      </Formik>
    </>
  )
}
