import React from "react";
import type { ReactNode } from "react";
import "../common.css";

export interface CardProps {
  children: ReactNode;
  title?: string;
  className?: string;
}

function Card({ children, title, className = "" }: CardProps) {
  return (
    <div className={`ui-card ${className}`.trim()}>
      {title && <h3 className="ui-card__title">{title}</h3>}
      {children}
    </div>
  );
}

export default Card;
