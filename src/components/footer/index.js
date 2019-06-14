import React from 'react'

const footer = () => (
  // eslint-disable-next-line
  <footer className="page-foot" role="footer">
    <div className="wrapper wrapper--default">
      <nav className="page-foot-nav">
        <ul className="footer-links footer-links--left-aligned">
          <li>© 2019 Livingdocs</li>
          <li>
            <a href="mailto:contact@livingdocs.io">Contact us</a>
          </li>
        </ul>
        <ul className="footer-links footer-links--right-aligned">
          <li>
            This blog is built with{' '}
            <a href="https://livingdocs.io" target="_blank" rel="noopener noreferrer">
              Livingdocs
            </a>
            .
          </li>
        </ul>
      </nav>
    </div>
  </footer>
)

export default footer
