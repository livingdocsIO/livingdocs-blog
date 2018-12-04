import React from 'react'
import Helmet from 'react-helmet'
import Header from '../header'
import Footer from '../footer'
import favicon from '../resources/favicon.png'
import css from '../resources/living-times014.css'

// Set a basic set of SEO data
// blog-posts and author-pages will over overwrite some of them
const Layout = ({ children }) => (
  <div>
    <Helmet defaultTitle="Livingblogs" titleTemplate="%s - Livingblogs">
      <html lang="en" />
      <meta name="author" content="Livingdocs AG, Zürich, Switzerland" />
      <meta name="viewport" content="width=device-width" />
      <meta name="keywords" content="Livingdocs blog example livingblogs" />
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta property="fb:page_id" content="id" />
      <meta property="twitter:account_id" content="id" />
      <meta
        name="description"
        content="This is the Livingdocs-blog. We publish content all around Javascript, Frameworks and Livingdocs itself."
      />

      <link
        title="timeline-styles"
        rel="shortcut icon"
        type="image/png"
        href={favicon}
      />
      <link title="timeline-styles" type="text/css" href={css.toString()} />
      <noscript>Please enable Javascript</noscript>
    </Helmet>
    <Header />
    <div>{children}</div>
    <Footer />
  </div>
)
export default Layout
