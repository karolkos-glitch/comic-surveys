import React from 'react'

interface ButtonProps {
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

const Button = ({ disabled, children, onClick}:  ButtonProps) => {
  return (
    <button onClick={onClick} disabled={disabled}>{children}</button>
  )
}

export default Button