import React from "react";
import PropTypes from "prop-types";
import { FormFeedback, FormGroup, Input, Label } from "reactstrap";

class FormInput extends React.PureComponent {
  static propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string,
    inputId: PropTypes.string.isRequired,
    invalid: PropTypes.bool,
    required: PropTypes.bool,
    feedback: PropTypes.string
  };

  static defaultProps = {
    required: false,
    invalid: false,
    feedback: "",
    value: "",
    label: "",
    placeholder: ""
  };

  render() {
    const {
      type,
      name,
      placeholder,
      value,
      onChange,
      label,
      inputId,
      invalid,
      required,
      feedback
    } = this.props;
    const asteristk = required ? "*" : "";
    return (
      <FormGroup>
        <Label>
          {label}
          {asteristk}
        </Label>
        <label htmlFor={inputId} className="sr-only">
          {label}
        </label>
        <Input
          id={inputId}
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          invalid={invalid}
        />
        <FormFeedback>{feedback}</FormFeedback>
      </FormGroup>
    );
  }
}

export default FormInput;
