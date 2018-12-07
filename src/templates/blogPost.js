import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/layout'
import SocialMediaShareButtons from '../components/socialMediaButtons'
import {Twitter, Facebook, Basic} from '../components/SEO'
import {returnAuthorCard} from '../components/helpers'

// The pages created in gatsby-node.js will use this component("template" by gatsby convention)
// The data is recieved by the graphQL query from the bottom of this component
const BlogPost = props => {
  const authors =
    props.data.publications.publication.metadata.authors &&
    props.data.publications.publication.metadata.authors.references

  // SEO - description (Page, twitter, facebook)
  const description = props.data.publications.publication.metadata.description

  // SEO - title (Page, twitter, facebook)
  const title = props.data.publications.publication.metadata.title

  // HTML - rendering the html-body
  const html = props.data.publications.extra.html

  // SEO - url (Page, twitter, facebook)
  const url = props.data.site.siteMetadata.siteUrl

  return (
    <Layout>
      {/* SEO start, information for the html <head></head> */}
      <Basic
        scripts={
          // embed twitter script in the <head></head> if it exists
          props.data.publications.publication.metadata.dependencies.js &&
          props.data.publications.publication.metadata.dependencies.js[0].code
        }
        title={title}
        description={description}
      />
      <Twitter title={title} description={description} url={url} />
      <Facebook title={title} description={description} url={url} />
      {/* SEO start, information for the html <head></head> */}
      <div dangerouslySetInnerHTML={{__html: html}} />
      {// this is just a fix because livingdocs does not provide author details
        authors && authors.map(author => returnAuthorCard(author.id))}
      <SocialMediaShareButtons title={title} description={description} />
    </Layout>
  )
}

// in gatsby-node.js we gave a context "slug"
// we can use that to filter the matching publication and slug now
export const query = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    publications(extra: {slug: {eq: $slug}}) {
      publication {
        metadata {
          authors {
            references {
              id
            }
          }
          dependencies {
            js {
              code
            }
          }
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
export default BlogPost
