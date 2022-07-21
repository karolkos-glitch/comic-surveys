import React from 'react'

interface ButtonProps {
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

const Button = ({ disabled, children, onClick}:  ButtonProps) => {
  return (
    <button 
      style={{
        backgroundColor: '#EA4C89',
        borderRadius: '8px',
        borderStyle: 'none',
        color: '#FFFFFF',
        cursor: 'pointer',
        display: 'inline-block',
        fontSize: '14px',
        fontWeight: 500,
        height: '40px',
        lineHeight: '20px',
        listStyle: 'none',
        margin: 0,
        outline: 'none',
        padding: '8px 16px',
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

