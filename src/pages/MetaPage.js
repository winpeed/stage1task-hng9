import React, { useState } from "react";
import Footer from "../components/meta/Footer";
import Header from "../components/meta/Header";
import Modal from "../components/Modal";
import Navbar from "../components/Navbar";
import { homeImages } from "../utils/homeImages";

function MetaPage() {
  return (
    <>
      <Header />

      <section className="meta__hero">
        <div className="left">
          <h1>
            Rent a <span>Place</span> away from <span>Home</span> in the{" "}
            <span>Metaverse</span>
          </h1>
          <p>
            we provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </p>

          <form>
            <input type="email" placeholder="Search for location" />
            <button>Search</button>
          </form>
        </div>

        <div className="right">
          <img src="/hero-img.svg" alt="Hero" />
        </div>
      </section>

      <section className="meta__tokens">
        <img src="/meta/mb-token.svg" alt="MB token" />
        <img src="/meta/metamask.svg" alt="Metamask" />
        <img src="/meta/opensea.svg" alt="Opensea" />
      </section>

      <section className="meta__inspiration">
        <h2>Inspiration for your next adventure</h2>
        <div className="all__items">
          {homeImages.map((item) => {
            const { id, name, price, distance, duration } = item;
            return (
              <article key={id}>
                <img src={`${id}.svg`} alt="First" />
                <div className="top">
                  <span>{name}</span>
                  <span>{price}</span>
                </div>
                <div className="middle">
                  <span>{distance}</span>
                  <span>{duration}</span>
                </div>

                <img src="/stars.svg" alt="Five Stars" />
              </article>
            );
          })}
        </div>
      </section>

      <section className="meta__info">
        <div className="content">
          <div className="text__wrapper">
            <h3>Metabnb NFTs</h3>

            <p>
              Discover our NFT gift cards collection. Loyal customers gets
              amazing gift cards which are traded as NFTs. These NFTs gives our
              cutomer access to loads of our exclusive services.
            </p>

            <button>Learn more</button>
          </div>

          <div className="img__wrapper">
            <img src="/section-img.svg" alt="Info Section" style={{}} />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default MetaPage;
