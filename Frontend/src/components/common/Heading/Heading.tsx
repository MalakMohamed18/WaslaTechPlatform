import React from "react";
import type { ReactNode } from "react";
import "../common.css";

export interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: ReactNode;
  className?: string;
}

function Heading({ level = 2, children, className = "" }: HeadingProps) {
  const Tag = `h${level}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  return (
    <Tag className={`ui-heading ui-heading--${level} ${className}`.trim()}>
      {children}
    </Tag>
  );
}

export default Heading;
