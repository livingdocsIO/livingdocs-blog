import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { Twitter, Facebook, Basic } from '../components/SEO'
import SocialMediaShareButtons from '../components/socialMediaButtons'
import AuthorDetails from '../components/authorDetails'

const BlogPost = props => {
  const profile = props.data.publications.publication.metadata.profile // SEO - description (Page, twitter, facebook)
  const title = props.data.publications.publication.metadata.title // SEO - title (Page, twitter, facebook)
  const biography = props.data.publications.publication.metadata.biography
  const url = props.data.site.siteMetadata.siteUrl // SEO - url (Page, twitter, facebook)
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

export const query = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    publications(extra: { slug: { eq: $slug } }) {
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
export default BlogPost
