import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render(){
    return (
      <div>
        HOME
        <div>
          <Link to={'login'}>login</Link>
        </div>
      </div>
    );
  }
}
