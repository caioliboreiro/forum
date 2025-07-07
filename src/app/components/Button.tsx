import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'filled' | 'outline' | 'icon';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
};

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'filled',
  className = '',
  type = 'button',
  ...props
}) => {
  const base = 'px-4 py-2 rounded text-sm font-medium transition-colors duration-200 hover:cursor-pointer';

  const variants: Record<NonNullable<ButtonProps['variant']>, string> = {
    filled: 'bg-primary text-white active:bg-secondary',
    outline: 'border border-brand text-brand hover:bg-brand/10',
    icon: ''
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  return (
    <button type={type} className={classes} {...props} >
      {children}
    </button>
  );
};
