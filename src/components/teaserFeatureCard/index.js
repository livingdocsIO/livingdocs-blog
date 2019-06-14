import React from 'react'
import {Link} from 'gatsby'
import {resolveAuthorName} from '../helpers/resolveAuthorName'

const teaserFeatureCard = props => {
  const {title, publishDate, teaserImage, description, authors, flag, slug} = props
  const url = teaserImage && teaserImage.originalUrl
  const isSmall = props.small ? 'teaser-feature-card--small' : ''
  const date = new Date(publishDate).toLocaleDateString('de-DE')
  return (
    <div className="placeholder--teaser-card">
      <div className={`teaser-feature-card ${isSmall}`}>
        <a
          className="teaser-feature-card__image"
          href={slug}
          style={{backgroundImage: `url(${url})`}}
        />
        <div className="teaser-feature-card__body">
          {flag && <span className="teaser-card__flag">{flag}/</span>}
          <h2 className="teaser-feature-card__title">
            <Link to={slug}> {title}</Link>
          </h2>
          <p className="teaser-feature-card__text">{description}</p>
          <ul className="teaser-feature-card__byline">
            {authors &&
              authors.references.map(author => resolveAuthorName(author.id))}
            <li>{date}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default teaserFeatureCard
