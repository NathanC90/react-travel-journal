import React from "react";
import globe from '../images/globe.png'

export default function Header() {
  return (
    <header className="header">
      <img className="globe-logo" src={globe} alt="globe logo" />
      <h1 className="header-title">my travel journal</h1>
    </header>
  );
}
