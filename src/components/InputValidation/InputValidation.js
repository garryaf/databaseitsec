import React from 'react';
import PropTypes from 'prop-types';
import { withFormsy } from 'formsy-react';

class InputValidation extends React.Component {

  static propTypes = {
    trigger: PropTypes.string,
    type: PropTypes.string,
    className: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
    placeholder: PropTypes.string,
    setValue: PropTypes.func,
    isFormSubmitted: PropTypes.func,
    getErrorMessage: PropTypes.func,
    showRequired: PropTypes.func,
  };

  static defaultProps = {
    trigger: null,
    type: 'text',
    className: '',
    name: '',
    id: '',
    placeholder: '',
  };

  constructor() {
    super();
    this.changeValue = this.changeValue.bind(this);
  }

  changeValue(event) {
    this.props.setValue(event.currentTarget.value);
  }

  render() {
    const errorMessageObject = (this.props.isFormSubmitted || this.props.trigger)
      ? this.props.getErrorMessage
      : null;
    const required = (this.props.isFormSubmitted && this.props.showRequired)
      ? <span className={'help-block text-danger'}>This value is required.</span>
      : null;
    const errorMessage = [];
    if (errorMessageObject) {
      Object.keys(errorMessageObject).forEach((type) => {
        errorMessage.push(errorMessageObject[type]);
      });
    }
    const errorList = errorMessage.map((msg, index) =>
      <span key={`msg-err-${index.toString()}`} className={'help-block text-danger'}>{msg}</span>,
    );
    console.log(errorList)
    return (
      <div className={this.props.className}>
        <input
          type={this.props.type}
          name={this.props.name}
          id={this.props.id}
          className={'form-control'}
          onChange={this.changeValue}
          value={this.props.value || ''}
          placeholder={this.props.placeholder}
        />
        {required}
        {errorList}
      </div>
    )
  }
}

export default withFormsy(InputValidation);
