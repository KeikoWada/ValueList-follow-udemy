import React from 'react';
import { Field, reduxForm } from 'redux-form';

class ValueForm extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field name="item" component={this.renderInput} label="Enter Item" />
        <Field
          name="price"
          component={this.renderInput}
          label="Enter Price"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.item) {
    errors.item = 'You must enter a item';
  }

  if (!formValues.price) {
    errors.price = 'You must enter a price';
  }

  return errors;
};

export default reduxForm({
  form: 'valueForm',
  validate
})(ValueForm);
