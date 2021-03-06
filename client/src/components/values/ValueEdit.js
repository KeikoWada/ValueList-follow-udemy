import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchValue, editValue } from '../../actions';
import ValueForm from './ValueForm';

class ValueEdit extends React.Component {
  componentDidMount() {
    this.props.fetchValue(this.props.match.params.id);
  }

  onSubmit = formValues => {
    this.props.editValue(this.props.match.params.id, formValues);
  };

  render() {
    if (!this.props.value) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h3>Edit Value</h3>
        <ValueForm
          initialValues={_.pick(this.props.value, 'item', 'price')}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { value: state.values[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchValue, editValue }
)(ValueEdit);
