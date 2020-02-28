import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/SEO'
import {metadata} from '../../config'

const page = props => {
  // SEO - description | title | url
  const imageUrl = props.data.publications.publication.metadata.teaserImage.url
  const description = props.data.publications.publication.metadata.description
  const title = props.data.publications.publication.metadata.title
  const baseUrl = metadata.url

  // HTML - rendering the html-body
  const html = props.data.publications.extra.html
  return (
    <Layout>
      <SEO
        title={title}
        description={description}
        url={`${baseUrl}${props.path}`}
        imageUrl={imageUrl}
      />
      <div dangerouslySetInnerHTML={{__html: html}} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    publications(extra: { slug: { eq: $slug } }) {
      publication {
        metadata {
          title
          description
        }
      }
      extra {
        html
        slug
      }
    }
  }
`
export default page
