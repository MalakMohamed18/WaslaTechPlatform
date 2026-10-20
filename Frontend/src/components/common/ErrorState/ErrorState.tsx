import React from "react";
import type { ReactNode } from "react";
import Button from "../Button/Button";
import "../common.css";

export interface ErrorStateProps {
  message?: string;
  children?: ReactNode;
  onRetry?: () => void;
  className?: string;
}

function ErrorState({
  message = "Something went wrong.",
  children,
  onRetry,
  className = "",
}: ErrorStateProps) {
  return (
    <div className={`ui-state ui-state--error ${className}`.trim()} role="alert">
      {children || <p>{message}</p>}
      {onRetry && (
        <Button variant="danger" onClick={onRetry}>
          Try again
        </Button>
      )}
    </div>
  );
}

export default ErrorState;
