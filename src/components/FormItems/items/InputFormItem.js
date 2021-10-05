import React, { Component} from "react";
import PropTypes from "prop-types";
import { useField } from "formik";

const InputFormItem = (props) => {

  const [field, meta] = useField(props)

  const {
    required = false,
    name,
    hint,
    size,
    schema,
    password,
    autoFocus,
    autoComplete,
    placeholder,
    inputProps,
    errorMessage,
  } = props;

  const { label } = schema[name]
  return (
    <>
      {!!label && (
        <label
          htmlFor={name}
          className={`col-form-label ${required ? 'required' : null}`}
        >
          {label}
        </label>
      )}
      <input
        id={name}
        type={password ? 'password' : 'text'}
        placeholder={placeholder || undefined}
        autoFocus={autoFocus || undefined}
        autoComplete={autoComplete || undefined}
        className={`form-control`}
        {...field}
      />
      {meta.touched && meta.error ? (
        <div className="error">
          {meta.error}
        </div>
      ) : null}
    </>
  )
}

InputFormItem.propTypes = {
  required: PropTypes.bool,
  name: PropTypes.string.isRequired,
  hint: PropTypes.string,
  size: PropTypes.string,
  type: PropTypes.string,
  autoFocus: PropTypes.bool,
  prefix: PropTypes.string,
  placeholder: PropTypes.string,
  errorMessage: PropTypes.string,
  inputProps: PropTypes.object,
}

export default InputFormItem;
