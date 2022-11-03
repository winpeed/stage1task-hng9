import React from "react";

function Footer() {
  return (
    <footer>
      <a href="https://internship.zuri.team/" target="_blank" rel="noreferrer">
        <span className="zuri__icon">
          <img src="Vector.svg" alt="Zuri Internship Logo" />
          <img src="dotVector.svg" alt="Dot Vector" className="dot__icon" />
        </span>
      </a>

      <a href="/" className="footer__text">
        <span>HNG Internship 9 Frontend Task</span>
      </a>

      <a href="https://ingressive.org/about/" target="_blank" rel="noreferrer">
        <span>
          <img src="I4G.svg" alt="Ingressive for Good" />
        </span>
      </a>
    </footer>
  );
}

export default Footer;
