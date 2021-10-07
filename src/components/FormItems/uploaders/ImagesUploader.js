import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import FileUploader from "../uploaders/UploadService";
import Errors from "../error/errors";
import ImagesUploaderWrapper from "../style/ImagesUploaderWrapper";

const ImagesUploader = (props) => {
  const { max, readonly, value } = props;
  const [loading, setLoading] = useState(false)
  const input = useRef();

  const imgValues = () => {
    if (!value) {
      return [];
    }
    return Array.isArray(value) ? value : [value];
  };

  const fileList = () => {
    return imgValues().map((item) => ({
      uid: item.id || undefined,
      name: item.name,
      status: 'done',
      url: item.publicUrl,
    }));
  };

  const handleRemove = (id) => {
    props.onChange(
      imgValues().filter((item) => item.id !== id),
    );
  };

  const handleChange = async (event) => {
    try {
      const files = event.target.files;

      if (!files || !files.length) {
        return;
      }

      let file = files[0];

      FileUploader.validate(file, props.schema);

      setLoading(true)

      file = await FileUploader.upload(
        props.path,
        file,
        props.schema,
      );

      input.current.value = '';

      setLoading(false)
      props.onChange([...this.value(), file]);
    } catch (error) {
      input.current.value = '';
      console.log('error', error);
      setLoading(false)
      Errors.showMessage(error);
    }
  };

  const uploadButton = (
    <label
      className="btn btn-outline-secondary btn-outline px-4 mb-2"
      style={{ cursor: 'pointer' }}
    >
      {'Upload an image'}
      <input
        type="file"
        style={{ display: 'none' }}
        disabled={loading || readonly}
        accept="image/*"
        onChange={handleChange}
        ref={input}
      />
    </label>
  )

  return (
    <ImagesUploaderWrapper>
      {readonly || (max && fileList().length >= max)
        ? null
        : uploadButton
      }
      {imgValues() && imgValues().length
        ? (<div className="d-flex flex-row flex-wrap">
          {imgValues().map((item) => {
            return (
              <div
                className="mr-2 mb-2 img-card"
                style={{ height: '100px' }}
                key={item.id}
              >
                <img
                  alt={item.name}
                  src={item.publicUrl}
                  className="img-thumbnail"
                  style={{
                    width: '100px',
                    height: '100px',
                    objectFit: 'cover',
                  }}
                />
                <div className="img-buttons rounded-bottom">
                  <button
                    type="button"
                    className="btn btn-link"
                  >
                    <i className="la la-search"/>
                  </button>
                  {!readonly && (
                    <button
                      type="button"
                      className="btn btn-link ml-2"
                      onClick={() => handleRemove(item.id)}
                    >
                      <i className="la la-times"/>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>)
        : null
      }
    </ImagesUploaderWrapper>
  );
}

ImagesUploader.propTypes = {
  readonly: PropTypes.bool,
  path: PropTypes.string,
  max: PropTypes.number,
  schema: PropTypes.shape({
    image: PropTypes.bool,
    size: PropTypes.number,
    formats: PropTypes.arrayOf(PropTypes.string),
  }),
  value: PropTypes.any,
  onChange: PropTypes.func,
};

export default ImagesUploader;

