import React from "react";
import type { InputHTMLAttributes } from "react";
import "../common.css";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

function Input({ label, error, id, className = "", ...props }: InputProps) {
  return (
    <div className="ui-input">
      {label && <label htmlFor={id}>{label}</label>}
      <input
        id={id}
        className={`ui-input__field ${error ? "ui-input__field--error" : ""} ${className}`.trim()}
        aria-invalid={error ? true : undefined}
        {...props}
      />
      {error && (
        <span className="ui-input__error" role="alert">
          {error}
        </span>
      )}
    </div>
  );
}

export default Input;
