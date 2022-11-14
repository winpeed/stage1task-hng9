import React from "react";
import Footer from "../components/meta/Footer";
import Header from "../components/meta/Header";
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
          <img src="/hero-img.svg" alt="Hero" loading="lazy" />
        </div>
      </section>

      <section className="meta__tokens">
        <img src="/mb-token.svg" alt="MB token" loading="lazy" />
        <img src="/metamask.svg" alt="Metamask" loading="lazy" />
        <img src="/opensea.svg" alt="Opensea" loading="lazy" />
      </section>

      <section className="meta__inspiration">
        <h2>Inspiration for your next adventure</h2>
        <div className="all__items">
          {homeImages.map((item) => {
            const { id, name, price, distance, duration } = item;
            return (
              <article key={id}>
                <img src={`/${id}.svg`} alt={name} loading="lazy" />
                <div className="top">
                  <span>{name}</span>
                  <span>{price}</span>
                </div>
                <div className="middle">
                  <span>{distance}</span>
                  <span>{duration}</span>
                </div>

                <img src="/stars.svg" alt="Five Stars" loading="lazy" />
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
            <img src="/section-img.svg" alt="Info Section" loading="lazy" />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default MetaPage;
