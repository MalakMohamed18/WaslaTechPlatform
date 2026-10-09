import React from "react";
import type { ReactNode } from "react";

interface EmptyProps {
  message?: string;
  children?: ReactNode;
  className?: string;
}

function Empty({
  message = "No data available.",
  children,
  className = "",
}: EmptyProps) {
  return (
    <div className={`empty ${className}`}>
      {children || <p>{message}</p>}
    </div>
  );
}

export default Empty;