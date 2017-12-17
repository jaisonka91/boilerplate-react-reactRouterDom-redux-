import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Routes from './router';

class App extends Component {
  render() {
    return(
      <div>
        {Routes }
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('container'));
