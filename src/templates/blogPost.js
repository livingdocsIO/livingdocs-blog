import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/SEO'
import {metadata} from '../../config'
import ProgressBar from '../components/readingProgress/progress'

const blogPost = props => {
  // SEO - description | title | url
  const description = props.data.publications.publication.metadata.description
  const scripts = props.data.publications.publication.metadata.dependencies.js
  const title = props.data.publications.publication.metadata.title
  const imageUrl = props.data.publications.publication.metadata.teaserImage.url
  const baseUrl = metadata.url

  // HTML - rendering the html-body
  const html = props.data.publications.extra.html

  return (
    <>
      <ProgressBar />
      <Layout>
        <SEO
          title={title}
          description={description}
          url={`${baseUrl}${props.path}`}
          scripts={scripts}
          imageUrl={imageUrl}
        />
        <div dangerouslySetInnerHTML={{__html: html}} />
      </Layout>
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    publications(extra: { slug: { eq: $slug } }) {
      publication {
        metadata {
          title
          description
          teaserImage {
            url
          }
          dependencies {
            js {
              code
            }
          }
        }
      }
      extra {
        html
        slug
      }
    }
  }
`
export default blogPost
