import React from "react";
import { useField } from "formik";

export default function FormikInput({ label, ...props}) {
  const [field, meta] = useField(props);
  return (
    <>
      <label thmlFor={props.id || props.name}>{label}</label>
      <input style={{ width: '400px'}} {...field} {...props} />
      {meta.touched && meta.error
        ? (<div className="">{meta.error}</div>)
        : null
      }
    </>
  )
}

