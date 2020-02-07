import React from 'react';

const Button = ({ className = '', btnText, onClick }) => (
    <button className={`button ${className}`} onClick={onClick}>
        {btnText}
    </button>
);

export default Button;
