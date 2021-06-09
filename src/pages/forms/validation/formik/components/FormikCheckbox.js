import React, { useState } from "react";
import { useField } from "formik";

export default function FormikCheckbox({ children, ...props}) {
  const [field, meta] = useField({...props, type: "checkbox"});
  const [checked, setChecked] = useState(false);

  return (
    <>
      <div className="form-check checkbox checkbox-primary mt-4 mb-0">
        <input
          className="styled"
          type="checkbox"
          id="checkbox0"
          checked={checked}
          onChange={() => setChecked(!checked)}
          {...field} {...props}
        />
        <label className="mb-0" htmlFor="checkbox0">{children}</label>
      </div>
      {meta.touched && meta.error
        ? (<div className="help-block text-danger label">{meta.error}</div>)
        : null
      }
    </>
  )
}

