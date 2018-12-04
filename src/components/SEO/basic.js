import React from 'react'
import Helmet from 'react-helmet'

export default props => (
  <Helmet title={props.title}>
    <script>{props.scripts}</script>
    <meta name="description" content={props.description} />
    <meta name="keywords" content={props.title} />
  </Helmet>
)
