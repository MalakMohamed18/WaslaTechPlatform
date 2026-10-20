import React from "react";
import type { ReactNode } from "react";
import "../common.css";

export interface SectionProps {
  children: ReactNode;
  className?: string;
}

function Section({ children, className = "" }: SectionProps) {
  return <section className={`ui-section ${className}`.trim()}>{children}</section>;
}

export default Section;
