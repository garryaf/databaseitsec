import React from "react";
import { useField } from "formik";

export default function FormikCheckbox({ children, ...props}) {
  const [field, meta] = useField({...props, type: "checkbox"});
  return (
    <>
      <label className="checkbox">
        <input {...field} {...props} type="checkbox"/>
        {children}
      </label>
      {meta.touched && meta.error
        ? (<div className="">{meta.error}</div>)
        : null
      }
    </>
  )
}
