import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";
import Form from "../Form";
import { PasswordInput } from "../../molecules";
import Model from "./SignInModel";

const { Field } = Form;

class SignInForm extends Component {
  static propTypes = {
    /** callback that triggers when the form is submitted */
    onSubmit: PropTypes.func.isRequired,
    /** callback that triggers when the form is cancelled */
    onCancel: PropTypes.func,
    /** optional initial username */
    userName: PropTypes.string,
    /** object with external errors */
    errors: PropTypes.shape({
      general: PropTypes.string,
      userName: PropTypes.string,
      password: PropTypes.string
    }),
    /** object that defines the links to other forms */
    links: PropTypes.arrayOf(
      PropTypes.shape({
        onClick: PropTypes.func.isRequired,
        title: PropTypes.string.isRequired
      })
    )
  };

  render() {
    const {
      onSubmit,
      links,
      errors,
      messages,
      userName,
      onCancel
    } = this.props;
    return (
      <Form
        Model={Model}
        values={new Model({ userName })}
        errors={errors}
        title="Sign In"
        links={links}
        onSubmit={onSubmit}
        onCancel={onCancel}
      >
        <Field title="User Name" name="userName" placeholder="User Name" />
        <Field
          title="Password"
          FieldComponent={PasswordInput}
          name="password"
          placeholder="Password"
        />
      </Form>
    );
  }
}

export default SignInForm;
