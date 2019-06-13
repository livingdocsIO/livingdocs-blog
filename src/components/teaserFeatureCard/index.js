import React from 'react'
import {Link, StaticQuery, graphql} from 'gatsby'

// query for all authors
const returnAuthorTitle = id => (
  <StaticQuery
    key={id}
    query={graphql`
      query returnAuthorTitleSlugId2 {
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

const teaserFeatureCard = props => {
  const {title, publishDate, teaserImage, description, authors, slug} = props
  const url = teaserImage && teaserImage.originalUrl
  const isSmall = props.small ? 'teaser-feature-card--small' : ''
  return (
    <div className="placeholder--teaser-card">
      <div className={`teaser-feature-card ${isSmall}`}>
        <a
          className="teaser-feature-card__image"
          href={slug}
          style={{backgroundImage: `url(${url})`}} // todo
        />
        <div className="teaser-feature-card__body">
          <span className="teaser-feature-card__flag">Technology</span>
          <h2 className="teaser-feature-card__title">
            <Link to={slug}> {title}</Link>
          </h2>
          <p className="teaser-feature-card__text">{description}</p>
          <ul className="teaser-feature-card__byline">
            <li>by {authors ? authors.map(author => returnAuthorTitle(author.id)) : 'mystery'}</li>
            <li>{publishDate}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default teaserFeatureCard
