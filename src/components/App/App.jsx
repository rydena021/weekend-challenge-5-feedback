import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import ReviewName from '../Review/ReviewName';
import ReviewBrewery from '../Review/ReviewBrewery';
import ReviewStyle from '../Review/ReviewStyle';
import ReviewComments from '../Review/ReviewComments';
import ReviewSuccess from '../Review/ReviewSuccess';
import Admin from '../Admin/Admin';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <br />
          <Route path="/" exact component={ReviewName}></Route>
          <Route path="/1" exact component={ReviewBrewery}></Route>
          <Route path="/2" exact component={ReviewStyle}></Route>
          <Route path="/3" exact component={ReviewComments}></Route>
          <Route path="/4" exact component={ReviewSuccess}></Route>
          <Route path="/admin" component={Admin}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
