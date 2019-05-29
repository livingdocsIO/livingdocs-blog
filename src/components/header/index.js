import React from 'react'
import logo from '../../resources/assets/images/li-stories-logo.svg'

const Header = () => (
  <header className="page-head" role="banner">
    <div>
      <div className="wrapper wrapper--default">
        <div className="meta-bar">
          <a className="logo" href="/">
            <img src={logo} alt="Living Stories" />
          </a>
          <nav className="meta-nav">
            <div className="meta-nav__item">
              <a href="https://github.com/livingdocsIO/blog-example" target="_blank">Source Code</a>
            </div>
            <div className="meta-nav__item meta-nav__item--highlight">
              <a href="https://edit.livingdocs.io/signup">Sign Up</a>
            </div>
          </nav>
        </div>
      </div>
      <div className="main-nav-container">
        <nav className="wrapper wrapper--default main-nav" role="navigation" />
      </div>
    </div>
  </header>
)

export default Header
