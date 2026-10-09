import React, { ElementType, ReactNode } from "react";

interface HeadingProps {
  children: ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
}

function Heading({
  children,
  level = 2,
  className = "",
}: HeadingProps) {
  const Tag = `h${level}` as ElementType;

  return <Tag className={`heading h${level} ${className}`}>{children}</Tag>;
}

export default Heading;