import React from "react";
import PropTypes from 'prop-types';
import ImagesUploader from "../uploaders/ImagesUploader";
import FormErrors from "../formErrors";
import { useField } from "formik";

const ImagesFormItem = (props) => {

  const [field, meta] = useField(props)

  const {
    required = false,
    max = undefined,
    name,
    schema,
    hint,
    path,
    fileProps,
    inputProps,
  } = props;

  const { label } = schema[name]

  return (
    <div className="form-group">
      {!!label && (
        <label
          htmlFor={name}
          className={`col-form-label ${
            required ? 'required' : null
          }`}
        >
          {label}
        </label>
      )}
      <br />
      <ImagesUploader
        path={path}
        schema={fileProps}
        value={name}
        {...field}
      />
      {meta.touched && meta.error ? (
        <div className="error">
          {meta.error}
        </div>
      ) : null}
    </div>
  )
}

ImagesFormItem.propTypes = {
  path: PropTypes.string.isRequired,
  required: PropTypes.bool,
  name: PropTypes.string.isRequired,
  hint: PropTypes.string,
  inputProps: PropTypes.object,
}

export default ImagesFormItem;
