import React, { useState } from "react";
import "./App.scss";

import logoImg from "./assets/img/logo.svg";
import cartImg from "./assets/img/cart.svg";
import earthImg from "./assets/img/earth.svg";
import rocketImg from "./assets/img/roket.svg";
import roketSmall from "./assets/img/roketsmall.svg";
import orbitImg from "./assets/img/palnets.png";

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="App">
      <header className="header">
        <div className="header__container">
          <div className="header__logo">
            <a href="#home">
              <img src={logoImg} alt="Logo" className="header__logo-icon" />
            </a>
          </div>

          <nav className={`header__nav ${isMobileMenuOpen ? "active" : ""}`}>
            <ul className="header__nav-list">
              <li className="header__nav-item">
                <a href="#home" data-text="Home">
                  Home
                </a>
              </li>
              <li className="header__nav-item">
                <a href="#offers" data-text="Products">
                  Products
                </a>
              </li>
            </ul>

            <div className="header__cart">
              {/* Белый вариант */}
              <svg
                className="cart-icon cart-icon--white"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={20}
                viewBox="0 0 24 20"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.23358 18.1817C9.23358 17.173 8.41124 16.3633 7.38685 16.3633C6.36248 16.3633 5.54012 17.173 5.54012 18.1817C5.54012 19.1903 6.36248 20 7.38685 20C8.41124 20 9.23358 19.1903 9.23358 18.1817ZM22.1607 18.1817C22.1607 17.173 21.3383 16.3633 20.3139 16.3633C19.2895 16.3633 18.4672 17.173 18.4672 18.1817C18.4672 19.1903 19.2895 20 20.3139 20C21.3383 20 22.1607 19.1903 22.1607 18.1817ZM24.0074 2.72726C24.0074 2.22994 23.589 1.8182 23.084 1.8182H5.75655C5.61231 1.13632 5.59781 0 4.6168 0H0.923317C0.418371 0 0 0.411965 0 0.90892C0 1.40621 0.418371 1.8182 0.923317 1.8182H3.86656L6.42024 13.5085C6.21824 13.9201 5.54012 15.0141 5.54012 15.4544C5.54012 15.9517 5.95851 16.3633 6.46353 16.3633H21.2373C21.7423 16.3633 22.1607 15.9517 22.1607 15.4544C22.1607 14.9574 21.7423 14.5453 21.2373 14.5453H7.96399C8.10823 14.2612 8.31026 13.9628 8.31026 13.6364C8.31026 13.3095 8.18035 12.9547 8.12266 12.6418L23.185 10.9092C23.6611 10.8522 24.0074 10.4545 24.0074 9.99974V2.72726Z"
                />
              </svg>

              {/* Градиентный вариант */}
              <svg
                className="cart-icon cart-icon--gradient"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={20}
                viewBox="0 0 24 20"
                fill="none"
              >
                <defs>
                  <linearGradient
                    id="cartGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                    gradientUnits="objectBoundingBox"
                  >
                    <stop offset="26.02%" stopColor="#EBFF00" />
                    <stop offset="90.57%" stopColor="#FF70D9" />
                  </linearGradient>
                </defs>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.23358 18.1817C9.23358 17.173 8.41124 16.3633 7.38685 16.3633C6.36248 16.3633 5.54012 17.173 5.54012 18.1817C5.54012 19.1903 6.36248 20 7.38685 20C8.41124 20 9.23358 19.1903 9.23358 18.1817ZM22.1607 18.1817C22.1607 17.173 21.3383 16.3633 20.3139 16.3633C19.2895 16.3633 18.4672 17.173 18.4672 18.1817C18.4672 19.1903 19.2895 20 20.3139 20C21.3383 20 22.1607 19.1903 22.1607 18.1817ZM24.0074 2.72726C24.0074 2.22994 23.589 1.8182 23.084 1.8182H5.75655C5.61231 1.13632 5.59781 0 4.6168 0H0.923317C0.418371 0 0 0.411965 0 0.90892C0 1.40621 0.418371 1.8182 0.923317 1.8182H3.86656L6.42024 13.5085C6.21824 13.9201 5.54012 15.0141 5.54012 15.4544C5.54012 15.9517 5.95851 16.3633 6.46353 16.3633H21.2373C21.7423 16.3633 22.1607 15.9517 22.1607 15.4544C22.1607 14.9574 21.7423 14.5453 21.2373 14.5453H7.96399C8.10823 14.2612 8.31026 13.9628 8.31026 13.6364C8.31026 13.3095 8.18035 12.9547 8.12266 12.6418L23.185 10.9092C23.6611 10.8522 24.0074 10.4545 24.0074 9.99974V2.72726Z"
                />
              </svg>
            </div>
          </nav>

          <div
            className={`header__burger ${isMobileMenuOpen ? "active" : ""}`}
            onClick={toggleMobileMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
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

          <div className="offers__grid">
            <div className="offers__card offers__card--main">
              <div className="offers__card-content">
                <h3 className="offers__card-title">
                  Move the borders of reality!
                </h3>
                <p className="offers__card-subtitle">
                  Go on a space adventure - it's possible with us!
                </p>
                <p className="offers__card-subtitle--media">
                  Go on a space adventure
                </p>
                <button className="offers__card-cta">Learn more</button>
              </div>
            </div>

            <div className="offers__card offers__card--left">
              <div className="offers__card-content">
                <h3 className="offers__card-title">
                  Space is not just stars and planets
                </h3>
                <p className="offers__card-subtitle">Go on a space adventure</p>
                <p className="offers__card-subtitle--media">
                  it is a majestic journey to
                </p>
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

            <div className="offers__card offers__card--bottom">
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
        </div>
      </section>

      <section id="embark" className="embark">
        <div className="embark__container">
          <h2 className="embark__title">Embark on a space journey</h2>
          <div className="embark__content">
            <input
              type="checkbox"
              id="readMoreToggle"
              className="embark__toggle"
            />
            <div className="embark__text">
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
            <label htmlFor="readMoreToggle" className="embark__read-more">
              <span className="read-more-text">Read more</span>
              <span className="read-less-text">Read less</span>
            </label>
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
