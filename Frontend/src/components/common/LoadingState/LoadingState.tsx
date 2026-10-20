import React from "react";
import type { ReactNode } from "react";
import "../common.css";

export interface LoadingStateProps {
  children?: ReactNode;
  className?: string;
}

function LoadingState({ children = "Loading...", className = "" }: LoadingStateProps) {
  return (
    <div className={`ui-state ui-state--loading ${className}`.trim()} role="status" aria-live="polite">
      {children}
    </div>
  );
}

export default LoadingState;
