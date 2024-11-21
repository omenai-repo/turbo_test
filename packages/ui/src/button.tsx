"use client";

interface ButtonProps {
  children: string;
  className?: string;
}

export const Button = ({ children, className }: ButtonProps) => {
  return (
    <button
      className={className}
      onClick={() => alert(`Hello from Omenai app!`)}
    >
      {children}
    </button>
  );
};
