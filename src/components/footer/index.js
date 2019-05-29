import React from 'react'

const footer = () => (
  // eslint-disable-next-line
  <footer class="page-foot" role="footer">
    <div className="wrapper wrapper--default">
      <nav className="page-foot-nav">
        <ul className="footer-links footer-links--left-aligned">
          <li>© 2018 Living Stories</li>
          <li>
            <a href="mailto:contact@livingdocs.io">Contact us</a>
          </li>
          <li>
            <a href="https://www.livingdocs.io">Work With us</a>
          </li>
          <li>
            <a href="https://github.com/livingdocsIO/blog-example">Github</a>
          </li>
        </ul>
        <ul className="footer-links footer-links--right-aligned">
          <li>This is an open-source demo blog built with Livingdocs.</li>
        </ul>
      </nav>
    </div>
  </footer>
)

export default footer
