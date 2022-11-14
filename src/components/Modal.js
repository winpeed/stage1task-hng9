import React from "react";

function Modal({ onShow }) {
  return (
    <section className="meta__overlay" onClick={onShow}>
      <div className="meta__modal">
        <div className="top">
          <h2>Connect Wallet</h2>
          <img
            src="/cancel.svg"
            alt="Cancel Icon"
            style={{ cursor: "pointer" }}
            onClick={onShow}
          />
        </div>

        <hr />

        <div className="bottom">
          <p>Choose your preferred wallet:</p>

          <article>
            <p>
              <img src="/meta-img.svg" alt="Meta logo" />
              <span> Metamask</span>
            </p>
            <img src="/forward-arrow.svg" alt="Forward arrow" />
          </article>

          <article>
            <p>
              <img src="/wallet-connect.svg" alt="Connect Wallet logo" />
              <span> Wallet Connect</span>
            </p>
            <img src="/forward-arrow.svg" alt="Forward arrow" />
          </article>
        </div>
      </div>
    </section>
  );
}

export default Modal;
