import React from "react";
import { useField } from "formik";
import {
  FormGroup,
  Label,
  Col,
  Input,
} from "reactstrap";

export default function FormikInput({ label, ...props}) {
  const [field, meta] = useField(props);
  return (
    <FormGroup>
      <label xs={12} htmlFor={props.id || props.name} className="headline-3">{label}</label>
      <Input xs={12} {...field} {...props} />
      {meta.touched && meta.error
        ? (<div className="help-block text-danger label">{meta.error}</div>)
        : null
      }

    </FormGroup>
  )
}

