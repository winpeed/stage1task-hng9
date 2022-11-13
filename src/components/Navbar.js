import React from "react";

function Navbar({ onShow, onNavShow }) {
  return (
    <section className="navbar__overlay" onClick={onNavShow}>
      <div className="navbar__modal">
        <div className="top">
          <h2>Menu</h2>
          <img
            src="/meta/cancel.svg"
            alt="Cancel Icon"
            style={{ cursor: "pointer" }}
            onClick={onNavShow}
          />
        </div>
        <hr />
        <nav className="mobile__nav">
          <ul>
            <li>
              <a href="/meta">Home</a>
            </li>
            <li>
              <a href="/meta/place">Place to stay</a>
            </li>
            <li>
              <a href="/">NFTs</a>
            </li>
            <li>
              <a href="/">Community</a>
            </li>
            <li className="connect" onClick={onShow}>
              Connect Wallet
            </li>
          </ul>
        </nav>

        <hr />
      </div>
    </section>
  );
}

export default Navbar;
