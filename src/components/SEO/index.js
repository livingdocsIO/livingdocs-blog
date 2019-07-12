/* eslint-disable max-len */
/* eslint-disable no-console */
import React from 'react'
import Basic from './basic'
import OpenGraph from './openGraph'
import Twitter from './twitter'

const warnPropMissing = prop => console.warn(`SEO: missing ${prop} for applying correct SEO information`)

const seo = props => {
  const {title, description, url, scripts} = props
  if (!title) warnPropMissing('title')
  if (!description) warnPropMissing('description')
  if (!url) warnPropMissing('url')
  return (
    <>
      <Basic title={title} description={description} scripts={scripts}/>
      <OpenGraph title={title} description={description} url={url} />
      <Twitter />
    </>
  )
}

export default seo

export {Basic, OpenGraph, Twitter}
