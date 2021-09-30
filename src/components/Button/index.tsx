import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import { ButtonProps } from './interface';

const Button = ({ href, name, type, classes }: ButtonProps) => {
  return (
    <div>
      <Link data-testid="button" to={href} className={`btn btn-${type} ${classes}`}>
        {name}
      </Link>
    </div>
  );
}

export default Button;
