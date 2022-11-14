import React from "react";

function Modal({ onShow }) {
  return (
    <section className="meta__overlay" onClick={onShow}>
      <div className="meta__modal">
        <div className="top">
          <h2>Connect Wallet</h2>
          <img
            src="https://res.cloudinary.com/praiseobende/image/upload/v1668426077/cancel_ds2lwl.svg"
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
              <img
                src="https://res.cloudinary.com/praiseobende/image/upload/v1668426151/meta-img_sw1zlc.svg"
                alt="Meta logo"
                loading="lazy"
              />
              <span> Metamask</span>
            </p>
            <img src="/forward-arrow.svg" alt="Forward arrow" />
          </article>

          <article>
            <p>
              <img
                src="https://res.cloudinary.com/praiseobende/image/upload/v1668426191/wallet-connect_vsfwpx.svg"
                alt="Connect Wallet logo"
                loading="lazy"
              />
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
