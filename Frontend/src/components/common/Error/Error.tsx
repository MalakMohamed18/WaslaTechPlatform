import React, { ReactNode } from "react";

interface ErrorProps {
  message?: string;
  children?: ReactNode;
  className?: string;
}

function Error({
  message = "Something went wrong.",
  children,
  className = "",
}: ErrorProps) {
  return (
    <div className={`error ${className}`} role="alert">
      {children || <p>{message}</p>}
    </div>
  );
}

export default Error;