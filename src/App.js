import React, { useState } from "react";
import "./App.scss";

import logoImg from "./assets/img/logo.svg";
import cartImg from "./assets/img/cart.svg";
import earthImg from "./assets/img/earth.svg";
import rocketImg from "./assets/img/roket.svg";
import roketSmall from "./assets/img/roketsmall.svg";
import orbitImg from "./assets/img/palnets.png";

function App() {
  const [isReadMoreExpanded, setIsReadMoreExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsReadMoreExpanded(!isReadMoreExpanded);
  };

  return (
    <div className="App">
      <header className="header">
        <div className="header__container">
          <div className="header__logo">
            <img src={logoImg} alt="Logo" className="header__logo-icon" />
          </div>

          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item">
                <a href="#home">Home</a>
              </li>
              <li className="header__nav-item">
                <a href="#products">Products</a>
              </li>
              <li className="header__nav-item">
                <img src={cartImg} alt="Cart" className="header__cart" />
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section id="home" className="hero">
        <div className="hero__container">
          <div className="hero__content">
            <div className="hero__text">
              <h1 className="hero__title">
                <span className="hero__title-line">
                  Discover the vast expanses of
                  <span className="hero__title-line hero__title-line--highlight">
                    space
                  </span>
                </span>
              </h1>
              <p className="hero__subtitle">
                Where the possibilities are{" "}
                <span className="hero__subtitle-highlight">endless!</span>
              </p>
              <button className="hero__cta">Learn more</button>
            </div>

            <div className="hero__image-placeholder">
              <div className="hero__image-content">
                <img src={earthImg} alt="Earth" className="hero__earth" />
                <img src={orbitImg} alt="Orbit" className="hero__orbit" />
                <img src={rocketImg} alt="Rocket" className="hero__rocket" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="offers" className="offers">
        <div className="offers__container">
          <h2 className="offers__title">Offers</h2>

          <div className="offers__main-card">
            <div className="offers__card-content">
              <h3 className="offers__card-title">
                Move the borders of reality!
              </h3>
              <p className="offers__card-subtitle">
                Go on a space adventure - it's possible with us!
              </p>
              <button className="offers__card-cta">Learn more</button>
            </div>
          </div>

          <div className="offers__cards-row">
            <div className="offers__card offers__card--left">
              <div className="offers__card-content">
                <h3 className="offers__card-title">
                  Space is not just stars and planets
                </h3>
                <p className="offers__card-subtitle">Go on a space adventure</p>
                <button className="offers__card-cta">Learn more</button>
              </div>
            </div>

            <div className="offers__card offers__card--right">
              <div className="offers__card-content">
                <h3 className="offers__card-title">
                  For those who dream of stars
                </h3>
                <p className="offers__card-subtitle">
                  Our offer: make your dream come true
                </p>
                <button className="offers__card-cta">Learn more</button>
              </div>
            </div>
          </div>

          <div className="offers__bottom-card">
            <div className="offers__card-content">
              <h3 className="offers__card-title">
                Fulfill your fantastic dreams
              </h3>
              <p className="offers__card-subtitle">
                Space has never been so close
              </p>
              <button className="offers__card-cta">Learn more</button>
            </div>
          </div>
        </div>
      </section>

      <section id="embark" className="embark">
        <div className="embark__container">
          <h2 className="embark__title">Embark on a space journey</h2>
          <div className="embark__content">
            <div
              className={`embark__text ${isReadMoreExpanded ? "expanded" : ""}`}
            >
              <p>
                Travelling into space is one of the most exciting and
                unforgettable adventures that can change your life forever. And
                if you have ever dreamed of exploring stars, planets and
                galaxies, then our company is ready to help you realize this
                dream. We offer a unique experience that will allow you to go on
                a space journey and see all the secrets of the universe. We
                guarantee that every moment in space will be filled with
                incredible impressions, excitement and new discoveries. Our team
                of professionals takes care of your safety and comfort so that
                you can fully enjoy your adventure in space. We offer various
                options for space excursions.
              </p>
            </div>
            <button className="embark__read-more" onClick={toggleReadMore}>
              Read more
            </button>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer__container">
          <img src={roketSmall} alt="Rocket" className="footer__rocket" />
          <p className="footer__text">Exciting space adventure!</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
