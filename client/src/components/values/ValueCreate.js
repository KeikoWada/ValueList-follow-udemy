import React from 'react';
import { connect } from 'react-redux';
import { createValue } from '../../actions';
import ValueForm from './ValueForm';

class ValueCreate extends React.Component {
  onSubmit = formValues => {
    this.props.createValue(formValues);
  };

  render() {
    return (
      <div>
        <h3>Create Value</h3>
        <ValueForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(
  null,
  { createValue }
)(ValueCreate);
