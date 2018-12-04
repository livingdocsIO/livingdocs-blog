import React from 'react'
import { Link } from 'gatsby'
import logo from './ld_logo_final.png'

const Header = () => (
  <header className="page-head" role="banner">
    <div>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <nav className="meta-nav">
        <div className="meta-nav__item">
          <a href="https://github.com/livingdocsIO/magazine-example">
            Source Code
          </a>
        </div>
        <div className="meta-nav__item meta-nav__item--highlight">
          <a href="https://www.livingdocs.io/pssst" target="blank_">
            Subscribe
          </a>
        </div>
      </nav>
      <div className="nav-container">
        <nav className="main-nav" role="navigation">
          <div className="main-nav__item">
            <Link to="/">articles</Link>
          </div>
          <div className="main-nav__item">
            <Link to="/authors">explore authors</Link>
          </div>
          <div className="main-nav__item">
            <Link to="/44444">404</Link>
          </div>
          <div className="main-nav__item">
            <Link to="/testing">Testing</Link>
          </div>
        </nav>
      </div>

      {/*  Ad
      <div className="ad ad--head">
        <a href="https://www.livingdocs.io" target="_blank" rel=" noopener noreferrer">
          <img
            alt="test"
            src="/assets/images/ads/billboards/ad-secret.gif"
            hidden=""
          />
        </a>
      </div>
      */}
    </div>
  </header>
)

export default Header
