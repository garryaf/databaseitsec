import React, { Component } from 'react';
import { Form, Formik } from "formik";
import CustomInput from "../../CustomInput/CustomInput";
import { Button, Label } from "reactstrap";
import { Link } from "react-router-dom";

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
          <div className="d-flex flex-wrap mt-3">
            <Link to="/template/user/profile">
              <Button color="primary" type="submit" className="mt-3">Save</Button>
            </Link>
            <Button className="ml-3" color="secondary" type="reset" className="mx-3 mt-3">Reset</Button>
            <Button className="ml-3" color="secondary" type="reset" className="mt-3">Cancel</Button>
          </div>
        </Form>
      </Formik>
    </>
  )
}
