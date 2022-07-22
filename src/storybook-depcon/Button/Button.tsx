import React from 'react'

interface ButtonProps {
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  color?: string;
  backgroundColor?: string;
};

const Button = ({ 
  disabled, children, onClick, 
  color = "white",
  backgroundColor = "#EA4C89" 
}:  ButtonProps) => {
  return (
    <button 
      style={{
        backgroundColor,
        borderRadius: '8px',
        borderStyle: 'none',
        color,
        cursor: 'pointer',
        display: 'inline-block',
        fontSize: '14px',
        fontWeight: 500,
        height: '40px',
        lineHeight: '20px',
        listStyle: 'none',
        margin: 0,
        outline: 'none',
        padding: '200px 160px',
        position: 'relative',
        textAlign: 'center',
        touchAction: 'manipulation',
      }} 
      onClick={onClick} 
      disabled={disabled}
      >{children}</button>
  )
}

export default Button;

