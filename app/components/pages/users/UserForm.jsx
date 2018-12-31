import React from "react";
import PropTypes from "prop-types";
import { Row } from "reactstrap";
import FormInput from "../../common/form/FormInput";

class UserForm extends React.PureComponent {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    actionType: PropTypes.string,
    errors: PropTypes.shape({
      name: PropTypes.string,
      email: PropTypes.string
    })
  };

  static defaultProps = {
    errors: {
      name: "",
      email: ""
    },
    actionType: ""
  };

  render() {
    const { user, onChange, errors, actionType } = this.props;
    const isNameInvalid = errors.name && errors.name !== "";
    const isEmailInvalid = errors.email && errors.email !== "";
    const emailFeedback = errors.email || "";

    if (actionType === "Delete") {
      return <p>{`Are you sure to delete User "${user.name}"`}</p>;
    }

    return (
      <React.Fragment>
        <div className="container">
          <Row>
            <section>
              <form>
                <FormInput
                  inputId="name"
                  label="Name"
                  type="text"
                  onChange={onChange}
                  value={user.name}
                  name="name"
                  placeholder="Full Name"
                  required
                  invalid={isNameInvalid}
                  feedback={errors.name}
                />
                <FormInput
                  inputId="email"
                  label="Email"
                  type="email"
                  onChange={onChange}
                  value={user.email}
                  name="email"
                  placeholder="Email"
                  required
                  invalid={isEmailInvalid}
                  feedback={emailFeedback}
                />
                <FormInput
                  inputId="skype"
                  label="Skype Id"
                  type="text"
                  onChange={onChange}
                  value={user.skype}
                  name="skype"
                  placeholder="skype Id"
                />
                <FormInput
                  inputId="phone"
                  type="text"
                  label="Phone Number"
                  onChange={onChange}
                  value={user.phone}
                  name="phone"
                  placeholder="Phone Number"
                />
              </form>
            </section>
          </Row>
        </div>
      </React.Fragment>
    );
  }
}

export default UserForm;
