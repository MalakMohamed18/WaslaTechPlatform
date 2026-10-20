import React from "react";
import type { ReactNode } from "react";
import "../common.css";

export interface EmptyStateProps {
  message?: string;
  children?: ReactNode;
  className?: string;
}

function EmptyState({ message = "No data available.", children, className = "" }: EmptyStateProps) {
  return (
    <div className={`ui-state ui-state--empty ${className}`.trim()}>
      {children || <p>{message}</p>}
    </div>
  );
}

export default EmptyState;
