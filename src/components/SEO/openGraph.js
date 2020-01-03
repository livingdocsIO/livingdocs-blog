import React from 'react'
import Helmet from 'react-helmet'

// Open Graph for various social media websites / example: Facebook, twitter cards
const openGraph = props => (
  <Helmet>
    <meta property="og:type" content="website" />
    <meta property="og:url" content={props.url} />
    <meta property="og:title" content={props.title} />
    <meta property="og:description" content={props.description} />
    <meta
      property="og:image"
      content={props.imageUrl}
    />
  </Helmet>
)

export default openGraph
