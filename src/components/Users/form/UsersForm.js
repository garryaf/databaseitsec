import React, { Component } from 'react';
import { Form, Formik } from "formik";
import CustomInput from "../../CustomInput/CustomInput";
import { Button, Label } from "reactstrap";

export default function UsersForm() {

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
          <CustomInput
            label="First Name"
            name="firstName"
            type="text"
            placeholder="Admin"
          />
          <CustomInput
            label="Last Name"
            name="lastName"
            type="text"
            placeholder=""
          />
          <CustomInput
            label="Phone Number"
            name="phoneNumber"
            type="text"
            placeholder=""
          />
          <CustomInput
            label="E-mail"
            name="email"
            type="email"
            placeholder="admin@flatlogic.com"
          />
          <Label className="headline-3">Avatar</Label>
          <div className="">
            <Button outline className="" color="secondary">Upload an image</Button>
          </div>
          <div className="d-flex mt-4">
            <Button color="primary" type="submit">Save</Button>
            <Button className="ml-3" color="secondary" type="reset">Reset</Button>
            <Button className="ml-3" color="secondary" type="reset">Cancel</Button>
          </div>
        </Form>
      </Formik>
    </>
  )
}
