import React from 'react'
import {graphql} from 'gatsby'
import AuthorCard from '../components/authorCard'
import Layout from '../components/layout'

const browseAuthors = ({data}) => (
  <Layout>
    {data.allPublications.edges.map(author => (
      <AuthorCard
        slug={author.node.extra.slug}
        title={author.node.publication.metadata.title}
        profile={author.node.publication.metadata.profile}
        authorImage={
          author.node.publication.metadata.authorImage &&
          author.node.publication.metadata.authorImage.originalUrl
        }
        documentId={author.node.publication.systemdata.documentId}
        key={author.node.publication.systemdata.documentId}
      />
    ))}
  </Layout>
)

export const query = graphql`
  query {
    allPublications(filter: {publication: {systemdata: {contentType: {eq: "author"}}}}) {
      edges {
        node {
          extra {
            slug
          }
          publication {
            metadata {
              authorImage {
                originalUrl
              }
              title
              profile
            }
            systemdata {
              documentId
            }
          }
        }
      }
    }
  }
`

export default browseAuthors
