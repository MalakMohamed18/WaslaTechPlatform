import React from 'react';
import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

function Section({
  children,
  className = "",
  id,
}: SectionProps) {
  return (
    <section id={id} className={`section ${className}`}>
      {children}
    </section>
  );
}

export default Section;