import React from 'react';
import './styles.css';

type Props = {
    text: string;
}

const Button = ({ text }: Props) => (
    <button className="btn">
        {text}
    </button>
);

export default Button;