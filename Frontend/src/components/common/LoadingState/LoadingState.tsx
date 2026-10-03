import React from "react";
import type { ReactNode } from "react";

interface LoadingProps {
  children?: ReactNode;
  className?: string;
}

function Loading({
  children = "Loading...",
  className = "",
}: LoadingProps) {
  return (
    <div className={`loading ${className}`} role="status" aria-live="polite">
      {children}
    </div>
  );
}

export default Loading;