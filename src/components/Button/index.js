import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

class Button extends Component {
  
  render() {
    let { href, name, type } = this.props;

    return (
      <div>
        <Link to={href} className={`btn btn-${type}`}>
          {name}
        </Link>
        
      </div>
    );
  }
}

export default Button;