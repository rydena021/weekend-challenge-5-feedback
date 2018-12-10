import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Feedback from '../Feeback/Feedback';

class ReviewComments extends Component {

  state = {
    comments: ''
  }

  handleClick = () => {
    this.props.dispatch({ type: 'ADD_COMMENTS', payload: this.state.comments });
    this.props.history.push('/4');
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <div>
        <h1>Beer Review</h1>
        <hr />
        <h3>Comments:</h3>
        <input onChange={this.handleChange} type="text" placeholder="comments" name="comments" value={this.state.comments} />
        <Button size="large" variant="contained" color="primary" onClick={this.handleClick}>
          Next
        </Button>
        <Feedback />
      </div>
    )
  }
}

export default connect()(ReviewComments);
