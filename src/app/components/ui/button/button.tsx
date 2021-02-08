import react, { Children } from 'react';
import './button.scss';

type ButtonType = "primary" | "circle" | "basic"

interface ButtonProps {
  type?: ButtonType;
  text?: string;
  className?: string;
  children?: React.ReactNode;
}

export const Button = ({type, className, text, children}: ButtonProps) => {
  const typeModifier = 
    type === "primary" ? "button--primary"
    : type === "circle" ? "button--circle"
    : ""

  return (
    <button className={`button ${className ?? ''} ${typeModifier}`}>
      {text ?? children}
    </button>
  )
}