import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

class ReviewSuccess extends Component {

  handleClick = () => {
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <h1>Thank You!</h1>
        <hr />
        <Button size="large" variant="contained" color="primary" onClick={this.handleClick}>
          Leave New Feedback
        </Button>
      </div>
    )
  }
}

export default connect()(ReviewSuccess);
