import React from "react";
import type { ReactNode } from "react";
import "../common.css";

export interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "danger";
  className?: string;
}

function Button({
  children,
  onClick,
  disabled = false,
  type = "button",
  variant = "primary",
  className = "",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`ui-btn ui-btn--${variant} ${className}`.trim()}
    >
      {children}
    </button>
  );
}

export default Button;
