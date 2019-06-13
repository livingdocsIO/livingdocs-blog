import React from 'react'
import {StaticQuery, graphql} from 'gatsby'

/**
 *
 * @param id {number} Author id
 * @returns JSX with the Authors-name
 */
const resolveAuthorName = id => (
  <StaticQuery
    key={id}
    query={graphql`
      query returnAuthorTitle {
        allPublications(filter: {publication: {systemdata: {contentType: {eq: "author"}}}}) {
          edges {
            node {
              id
              extra {
                slug
              }
              publication {
                metadata {
                  title
                }
              }
            }
          }
        }
      }
    `}
    // compare the id's of all authors to the given id
    render={data => {
      const author = data.allPublications.edges.find(publication => publication.node.id === id)
      return (
        author && (
          <li>
            {/* <Link to={author.node.extra.slug} key={author.node.id}> */}
              by {author.node.publication.metadata.title},
            {/* </Link> */}
          </li>
        )
      )
    }}
  />
)

export {resolveAuthorName}
