import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import GridView from './Components/GridView';

class App extends Component {
  render() {
    return (
    <Router>
      <div>
        <Route exact path="/" component={GridView}/>
      </div>
    </Router>
    );
  }
}

export default App;
