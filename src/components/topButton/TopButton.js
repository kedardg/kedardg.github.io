import React from "react";
import "./TopButton.scss";

export default function TopButton() {
  return (
    <div
      onClick={() => {
        window.scrollTo(0, 0);
      }}
      className="top-btn"
    >
      <i className="fas fa-chevron-up"></i>
    </div>
  );
} 