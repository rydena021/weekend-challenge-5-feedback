import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Feedback from '../Feeback/Feedback';

class ReviewBrewery extends Component {

  state = {
    brewery: ''
  }

  handleClick = () => {
    this.props.dispatch({ type: 'ADD_BREWERY', payload: this.state.brewery });
    this.props.history.push('/2');
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
        <h3>Name of Brewery:</h3>
        <input onChange={this.handleChange} type="text" placeholder="brewery" name="brewery" value={this.state.brewery} />
        <Button size="large" variant="contained" color="primary" onClick={this.handleClick}>
          Next
        </Button>
        <br />
        <Feedback />
      </div>
    )
  }
}

export default connect()(ReviewBrewery);
