import React from 'react'
import {Helmet} from 'react-helmet'

// twitter:title, twitter:description, twitter:image, twitter:url
// are derived from the OG data
const Twitter = props => (
  <Helmet>
    <meta property="twitter:card" content="summary_large_image" />
  </Helmet>
)

export default Twitter
