import React from 'react'
import {Link, StaticQuery, graphql} from 'gatsby'

// query for all authors
const returnAuthorTitle = id => (
  <StaticQuery
    key={id}
    query={graphql`
      query returnAuthorTitleSlugId {
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
          // return the author and the slug of the author page
          <Link to={author.node.extra.slug} key={author.node.id}>
            {author.node.publication.metadata.title},{' '}
          </Link>
        )
      )
    }}
  />
)

const BlogTeaser = props => {
  const {title, publishDate, teaserImage, flag, description, authors, slug} = props
  return (
    <div className="placeholder--teaser-card teaser-card--left-aligned-img">
      <div className="teaser-card">
        <figure className="teaser-card__figure">
          <Link to={slug}>
            <img
              alt="test"
              className="teaser-card__image"
              src={teaserImage && teaserImage.originalUrl}
            />
          </Link>
        </figure>
        <div className="teaser-card__body">
          <span className="teaser-card__flag">{flag}</span>
          <h2 className="teaser-card__title">
            <Link to={slug}> {title}</Link>
          </h2>
          <p className="teaser-card__text">{description}</p>
          <ul className="teaser-card__byline">
            <li>by {authors ? authors.map(author => returnAuthorTitle(author.id)) : 'mystery'}</li>
            <li>{publishDate}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default BlogTeaser
