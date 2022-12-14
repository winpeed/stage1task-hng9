import React from "react";

function Footer() {
  return (
    <footer className="meta__footer">
      <div className="wrapper">
        <div className="logo__column">
          <img
            src="https://res.cloudinary.com/praiseobende/image/upload/v1668426270/logo-2_kzmmxs.svg"
            alt="Logo 2"
          />

          <ul className="social__links">
            <li>
              <a href="/">
                <img src="/facebook.svg" alt="Facebook Logo" loading="lazy" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src="/instagram.svg" alt="instagram Logo" loading="lazy" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src="/twitter.svg" alt="twitter Logo" loading="lazy" />
              </a>
            </li>
          </ul>

          <span className="copyright">
            <img src="/copyright.svg" alt="copyright Logo" />
            2022 Metabnb
          </span>
        </div>

        <div className="column">
          <h4>Community</h4>
          <ul>
            <li>
              <a href="/">NFT</a>
            </li>
            <li>
              <a href="/">Tokens</a>
            </li>
            <li>
              <a href="/">Landlords</a>
            </li>
            <li>
              <a href="/">Discord</a>
            </li>
          </ul>
        </div>

        <div className="column">
          <h4>Places</h4>
          <ul>
            <li>
              <a href="/">Castle</a>
            </li>
            <li>
              <a href="/">Farms</a>
            </li>
            <li>
              <a href="/">Beach</a>
            </li>
            <li>
              <a href="/">Learn More</a>
            </li>
          </ul>
        </div>

        <div className="column">
          <h4>About us</h4>
          <ul>
            <li>
              <a href="/">Road Map</a>
            </li>
            <li>
              <a href="/">Creators</a>
            </li>
            <li>
              <a href="/">Career</a>
            </li>
            <li>
              <a href="/">Contact us</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
