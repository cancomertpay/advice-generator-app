import React from "react";

function Card({ children, className }) {
  return <div className={`card ${className && className}`}>{children}</div>;
}

export default Card;
