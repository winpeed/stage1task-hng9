import React from "react";
import Modal from "./Modal";

function Navbar({ onShow, onNavShow, isShow }) {
  return (
    <section className="navbar__overlay" onClick={onNavShow}>
      <div className="navbar__modal">
        <div className="top">
          <h2>Menu</h2>
          <img
            src="https://res.cloudinary.com/praiseobende/image/upload/v1668426077/cancel_ds2lwl.svg"
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
      {isShow && <Modal />}
    </section>
  );
}

export default Navbar;
