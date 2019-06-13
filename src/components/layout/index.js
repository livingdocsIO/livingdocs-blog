import React from 'react'
import Helmet from 'react-helmet'
import Header from '../header'
import Footer from '../footer'

import favicon from '../../resources/assets/images/favicon.png'
import '../../resources/stylesheets/living-stories.scss'
import {metadata} from '../../../config.js'
import {navigate} from 'gatsby'

// Set a basic set of SEO data
// blog-posts and author-pages will over overwrite some of them
class Layout extends React.Component {

  componentDidMount () {
    // This is a hacky approach.
    // Livingdocs will send a bunch of <a/> tags, we will addEventListeners for those.
    // We don't want to reload the page, because we lose a big chunk of performance.
    // that's why we swap out the <a/> behaviour with the gatsby "navigate", for internal links.
    for (const anchorTag of document.body.getElementsByTagName('a')) {
      this.internalLink(anchorTag) && anchorTag.addEventListener('click', this.handleClick)
    }
  }

  // remove event listerns for all <a> tags
  componentWillUnmount () {
    for (const anchorTag of document.body.getElementsByTagName('a')) {
      this.internalLink(anchorTag) && anchorTag.removeEventListener('click', this.handleClick)
    }
  }

  internalLink = link => link.host === window.location.host

  handleClick = event => {
    event.preventDefault()
    const path = new URL(event.currentTarget.href).pathname
    navigate(path)
  }

  render () {
    // eslint-disable-next-line max-len
    const {defaultTitle, titleTemplate, author, description, keywords, facebookId, twitterId} = metadata
    return (
      <div>
        <Helmet defaultTitle={defaultTitle} titleTemplate={titleTemplate}>
          <meta name="author" content={author} />
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
          <meta name="viewport" content="width=device-width" />
          <html lang="en" />
          <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta httpEquiv="Content-Language" content="en" />
          <meta property={facebookId} content="id" />
          <meta property={twitterId} content="id" />

          <link title="timeline-styles" rel="shortcut icon" type="image/png" href={favicon} />
          <noscript>Please enable Javascript</noscript>
        </Helmet>
        <Header />
        <main className="wrapper wrapper--default" role="main">
          {this.props.children}
        </main>
        <Footer />
      </div>
    )
  }
}
export default Layout
