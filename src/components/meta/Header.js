import React, { useState } from "react";
import Navbar from "../Navbar";

function Header() {
  const [isNavShow, setIsNavShow] = useState(false);
  const [isShow, setIsShow] = useState(true);
  return (
    <header className="meta__header">
      <div className="logo">
        <img src="/meta/logo-1.svg" alt="Logo 1" width={180} />
      </div>

      <nav className="right">
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
        </ul>

        <span className="connect" onClick={() => setIsShow(!isShow)}>
          Connect Wallet
        </span>
      </nav>

      <button className="menu__button" onClick={() => setIsNavShow(!isNavShow)}>
        Menu
      </button>

      {isNavShow && (
        <Navbar
          onShow={() => setIsShow(!isShow)}
          onNavShow={() => setIsNavShow(!isNavShow)}
        />
      )}
    </header>
  );
}

export default Header;
