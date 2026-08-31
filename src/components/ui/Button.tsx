import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';

type ButtonProps = {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
  to?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const variantStyles = {
  primary:
    'inline-flex items-center justify-center rounded-full bg-[var(--reset-turquoise)] px-6 py-3 text-sm font-medium text-[var(--white)] transition-colors duration-200 hover:bg-[var(--reset-aqua)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--reset-turquoise)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]',
  secondary:
    'inline-flex items-center justify-center rounded-full border border-[var(--reset-aqua)] bg-transparent px-6 py-3 text-sm font-medium text-[var(--text-primary)] transition-colors duration-200 hover:bg-[var(--reset-blue-50)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--reset-aqua)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]',
  ghost:
    'inline-flex items-center justify-center rounded-full px-3 py-2 text-sm font-medium text-[var(--text-primary)] transition-colors duration-200 hover:text-[var(--reset-turquoise)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--reset-aqua)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]',
};

export function Button({ children, variant = 'primary', className = '', to, ...props }: ButtonProps) {
  const classes = `${variantStyles[variant]} ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
