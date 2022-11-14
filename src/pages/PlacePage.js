import React, { useState } from "react";
import { placesImages } from "../utils/placesImages";
import { filterTypes } from "../utils/filterTypes";

import Footer from "../components/meta/Footer";
import Header from "../components/meta/Header";

function PlacePage() {
  const [filterText, setFilterText] = useState("");
  return (
    <>
      <Header />

      <section className="meta__inspiration">
        <div className="meta__filter">
          <ul>
            {filterTypes.map((item) => {
              return (
                <li key={item} onClick={() => setFilterText(item)}>
                  {item}
                </li>
              );
            })}

            <li onClick={() => setFilterText("")}>
              <img
                src="/location-icon.svg"
                alt="Location Icon"
                width={150}
                loading="lazy"
              />
            </li>
          </ul>
        </div>

        <div className="all__items">
          {filterText === ""
            ? placesImages.map((item) => {
                const { id, name, price, distance, duration } = item;
                return (
                  <article key={id}>
                    <img src={`/${id}.svg`} alt="First" loading="lazy" />
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
              })
            : placesImages
                .filter((item) => item.type === filterText)
                .map((item) => {
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

      <Footer />
    </>
  );
}

export default PlacePage;
