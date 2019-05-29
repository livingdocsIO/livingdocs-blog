import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/SEO'
import AuthorDetails from '../components/authorDetails'
import {metadata} from '../../config'

// The pages created in gatsby-node.js will use this component("template" by gatsby convention)
// The data is recieved by the graphQL query from the bottom of this component
const AuthorPage = props => {
  // SEO - description | title | url
  const profile = props.data.publications.publication.metadata.profile
  const title = props.data.publications.publication.metadata.title
  const url = metadata.url


  const biography = props.data.publications.publication.metadata.biography
  const authorImage =
    props.data.publications.publication.metadata.authorImage &&
    props.data.publications.publication.metadata.authorImage.originalUrl
  return (
    <Layout>
      <SEO title={title} description={profile} url={url}/>

      <AuthorDetails
        profile={profile}
        title={title}
        biography={biography}
        authorImage={authorImage}
      />
    </Layout>
  )
}

// in gatsby-node.js we gave a context "slug"
// we can use that to filter the matching publication and slug now
export const query = graphql`
  query($slug: String!) {
    publications(extra: {slug: {eq: $slug}}) {
      publication {
        metadata {
          authorImage {
            originalUrl
          }
          title
          profile
          biography
        }
      }
      extra {
        slug
      }
    }
  }
`
export default AuthorPage
