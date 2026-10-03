import React from "react";
import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

function Input({
  label,
  error,
  className = "",
  id,
  ...props
}: InputProps) {
  return (
    <div className="input-wrapper">
      {label && (
        <label htmlFor={id}>
          {label}
        </label>
      )}

      <input
        id={id}
        className={`input ${className}`}
        {...props}
      />

      {error && (
        <span className="input-error">
          {error}
        </span>
      )}
    </div>
  );
}

export default Input;