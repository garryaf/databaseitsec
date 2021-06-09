import React from "react";
import { useField } from "formik";
import {
  Input,
} from "reactstrap";

export default function FormikSelect({ label, ...props}) {
  const [field, meta] = useField(props);
  return (
    <>
      <label className="headline-3" htmlFor={props.id || props.name}>{label}</label>
      <Input type="select" {...field} {...props} />
      {meta.touched && meta.error
        ? <div className="help-block text-danger label">{meta.error}</div>
        : null
      }
    </>
  )
}
