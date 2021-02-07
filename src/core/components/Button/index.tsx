import React from 'react';
import './styles.css';

type Props = {
    text: string;
    onClick?: () => void;
}

const Button = ({ text, onClick }: Props) => (
    <button className="btn" onClick={onClick}>
        {text}
    </button>
);

export default Button;