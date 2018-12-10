import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';


class Feedback extends Component {

  handleClick = () => {
    this.postFeedback();
  }

  postFeedback = () => {
    let newFeedback = this.props.feedback;
    axios.post('/api/feedback', newFeedback)
      .then(response => {
        console.log('back from POST');
        this.props.dispatch({ type: 'CLEAR_FEEDBACK' });
        this.props.history.push('/4');
      }).catch(error => {
        console.log(error);
      });
  }

  render() {
    let feedback = this.props.feedback;
    let button;
    if (feedback.comments) {
      button =
      <Button size="large" variant="contained" color="primary" onClick={this.handleClick}>
        Submit
      </Button>
    }
    return (
      <div>
        <ul>
          <li>Name: {feedback.name}</li>
          <li>Brewery: {feedback.brewery}</li>
          <li>Style: {feedback.style}</li>
          <li>Comments: {feedback.comments}</li>
        </ul>
        {button}
      </div>
    )
  }
}

const mapStateToProps = store => {
  return {
    feedback: store.feedback
  }
}

export default connect(mapStateToProps)(Feedback);
