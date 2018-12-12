import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/layout'
import {Twitter, Facebook, Basic} from '../components/SEO'
import SocialMediaShareButtons from '../components/socialMediaButtons'
import AuthorDetails from '../components/authorDetails'
import {metadata} from '../../config'

// The pages created in gatsby-node.js will use this component("template" by gatsby convention)
// The data is recieved by the graphQL query from the bottom of this component
const AuthorPage = props => {
  // SEO - description (Page, twitter, facebook)
  const profile = props.data.publications.publication.metadata.profile

  // SEO - title (Page, twitter, facebook)
  const title = props.data.publications.publication.metadata.title

  const biography = props.data.publications.publication.metadata.biography

  // SEO - url (Page, twitter, facebook)
  const url = metadata.url

  const authorImage =
    props.data.publications.publication.metadata.authorImage &&
    props.data.publications.publication.metadata.authorImage.originalUrl
  return (
    <Layout>
      {/* SEO start, information for the html <head></head> */}
      <Basic title={title} description={profile} />
      <Twitter title={title} description={profile} url={url} />
      <Facebook title={title} description={profile} url={url} />
      {/* SEO start, information for the html <head></head> */}
      <AuthorDetails
        profile={profile}
        title={title}
        biography={biography}
        authorImage={authorImage}
      />
      <SocialMediaShareButtons title={title} profile={profile} />
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
