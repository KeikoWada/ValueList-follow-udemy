import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchValues } from '../../actions';

class ValueList extends React.Component {
  componentDidMount() {
    this.props.fetchValues();
  }

  renderAdmin(value) {
    if (value.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link to={`/values/edit/${value.id}`} className="ui button primary">
            Edit
          </Link>
          <Link
            to={`/values/delete/${value.id}`}
            className="ui button negative"
          >
            Delete
          </Link>
        </div>
      );
    }
  }

  renderList() {
    return this.props.values.map(value => {
      return (
        <div className="item" key={value.id}>
          {this.renderAdmin(value)}
          <i className="large middle aligned icon camera" />
          <div className="content">
            {value.item}
            <div className="price">{value.price}</div>
          </div>
        </div>
      );
    });
  }

  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: 'right' }}>
          <Link to="/values/new" className="ui button primary">
            Create Value
          </Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <h2>Values</h2>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    values: Object.values(state.values),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(
  mapStateToProps,
  { fetchValues }
)(ValueList);
