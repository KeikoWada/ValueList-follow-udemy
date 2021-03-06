import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import history from '../../history';
import { fetchValue, deleteValue } from '../../actions';

class ValueDelete extends React.Component {
  componentDidMount() {
    this.props.fetchValue(this.props.match.params.id);
  }

  renderActions() {
    const { id } = this.props.match.params;

    return (
      <React.Fragment>
        <button
          onClick={() => this.props.deleteValue(id)}
          className="ui button negative"
        >
          Delete
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  }

  renderContent() {
    if (!this.props.value) {
      return 'Are you sure you want to delete this value?';
    }

    return `Are you sure you want to delete the value of this item: ${
      this.props.value.item
    }`;
  }

  render() {
    return (
      <Modal
        title="Delete Value"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push('/')}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { value: state.values[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchValue, deleteValue }
)(ValueDelete);
