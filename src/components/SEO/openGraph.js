import React from 'react'
import Helmet from 'react-helmet'

// Open Graph for various social media websites / example: Facebook, twitter cards
const openGraph = props => (
  <Helmet>
    <meta name="type" property="og:type" content="website" />
    <meta name="url" property="og:url" content={props.url} />
    <meta name="title" property="og:title" content={props.title} />
    <meta name="description" property="og:description" content={props.description} />
    <meta name="image" property="og:image" content={props.imageUrl} />
  </Helmet>
)

export default openGraph
