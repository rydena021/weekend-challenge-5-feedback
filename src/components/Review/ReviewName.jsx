import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Feedback from '../Feeback/Feedback';

class ReviewName extends Component {

  state = {
    name: ''
  }

  handleClick = () => {
    this.props.dispatch({ type: 'ADD_NAME', payload: this.state.name });
    this.props.history.push('/1');
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
        <hr/>
        <h3>Name of Beer:</h3>
        <input onChange={this.handleChange} type="text" placeholder="name" name="name" value={this.state.name} />
        <Button size="large" variant="contained" color="primary" onClick={this.handleClick}>
          Next
        </Button>
        <br/>
        <Feedback />
      </div>
    )
  }
}

export default connect()(ReviewName);
