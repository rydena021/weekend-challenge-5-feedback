import React, { Component } from 'react';
import { connect } from 'react-redux';

class Feedback extends Component {

  render() {
    let feedback = this.props.feedback;
    return (
      <div>
        <ul>
          <li>Name: {feedback.name}</li>
          <li>Brewery: {feedback.brewery}</li>
          <li>Style: {feedback.style}</li>
          <li>Comments: {feedback.comments}</li>
        </ul>
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
