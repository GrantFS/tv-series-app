import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import { ButtonProps } from './interface';

class Button extends Component <ButtonProps> {

  render() {
    let { href, name, type } = this.props;

    return (
      <div>
        <Link data-testid="button" to={href} className={`btn btn-${type}`}>
          {name}
        </Link>

      </div>
    );
  }
}

export default Button;
