import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import AuthorCard from './authorCard'

export const returnAuthorCard = id => (
  <StaticQuery
    key={id}
    query={graphql`
      query authorCard {
        allPublications(
          filter: {
            publication: { systemdata: { contentType: { eq: "author" } } }
          }
        ) {
          edges {
            node {
              id
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
    `}
    render={data => {
      const author = data.allPublications.edges.find(
        publication => publication.node.id === id
      )
      return (
        author && (
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
        )
      )
    }}
  />
)
