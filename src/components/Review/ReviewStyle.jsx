import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Feedback from '../Feeback/Feedback';

class ReviewStyle extends Component {

  state = {
    style: ''
  }

  handleClick = () => {
    this.props.dispatch({ type: 'ADD_STYLE', payload: this.state.style });
    this.props.history.push('/3');
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
        <h3>Style of Beer:</h3>
        <input onChange={this.handleChange} type="text" placeholder="style" name="style" value={this.state.style} />
        <Button size="large" variant="contained" color="primary" onClick={this.handleClick}>
          Next
        </Button>
        <Feedback />
      </div>
    )
  }
}

export default connect()(ReviewStyle);
