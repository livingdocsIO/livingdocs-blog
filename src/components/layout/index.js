import React from 'react'
import Helmet from 'react-helmet'
import Header from '../header'
import Footer from '../footer'
import favicon from '../resources/favicon.png'
import css from '../resources/living-times014.css'
import {metadata} from '../../../config.js'

// Set a basic set of SEO data
// blog-posts and author-pages will over overwrite some of them
const Layout = ({children}) => (
  <div>
    <Helmet defaultTitle={metadata.defaultTitle} titleTemplate={metadata.titleTemplate}>
      <meta name="author" content={metadata.author} />
      <meta name="description" content={metadata.description} />
      <meta name="keywords" content={metadata.keywords} />
      <meta name="viewport" content="width=device-width" />
      <html lang="en" />
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta property={metadata.facebookId} content="id" />
      <meta property={metadata.twitterId} content="id" />

      <link title="timeline-styles" rel="shortcut icon" type="image/png" href={favicon} />
      <link title="timeline-styles" type="text/css" href={css.toString()} />
      <noscript>Please enable Javascript</noscript>
    </Helmet>
    <Header />
    <div>{children}</div>
    <Footer />
  </div>
)
export default Layout
