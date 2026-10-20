import React from "react";
import type { ReactNode } from "react";
import "../common.css";

export interface ContainerProps {
  children: ReactNode;
  className?: string;
}

function Container({ children, className = "" }: ContainerProps) {
  return <div className={`ui-container ${className}`.trim()}>{children}</div>;
}

export default Container;
