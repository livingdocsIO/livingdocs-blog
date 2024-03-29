import React from 'react'
import logo from '../../resources/assets/images/ld-logo.svg'

const Header = () => (
  <header className="blog-head" role="banner">
    <div>
      <div className="wrapper wrapper--default">
        <div className="meta-bar">
          <div className="meta-bar__unit">
            <a className="meta-bar__logo logo" href="https://livingdocs.io">
              <img src={logo} alt="Living Stories" />
            </a>
            <b className="meta-bar__title">
              <a href="/" style={{textDecoration: 'none'}}>Livingdocs Blog</a>
            </b>
          </div>
          <div className="meta-bar__unit">
            <nav className="meta-nav">
              <div className="meta-nav__item meta-nav__item--highlight">
                <a href="https://edit.livingdocs.io/signup" target="_blank" rel="noopener noreferrer">Try out Livingdocs</a>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div className="main-nav-container">
        <nav className="wrapper wrapper--default main-nav" role="navigation" />
      </div>
    </div>
  </header>
)

export default Header
