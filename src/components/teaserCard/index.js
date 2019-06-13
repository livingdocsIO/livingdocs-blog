import React from 'react'
import {Link} from 'gatsby'
import {resolveAuthorName} from '../helpers/resolveAuthorName'

const BlogTeaser = props => {
  const {title, publishDate, teaserImage, description, authors, slug} = props
  const url = teaserImage && teaserImage.originalUrl
  const date = new Date(publishDate).toLocaleDateString('de-DE')
  return (
    <div className="placeholder--teaser-card">
      <div className="teaser-card">
        <a
          className="teaser-card__image"
          href={slug}
          style={{backgroundImage: `url(${url})`}}
        ></a>
        <div className="teaser-card__body">
          <span className="teaser-card__flag">Technology</span>
          <h2 className="teaser-card__title">
            <Link to={slug}> {title}</Link>
          </h2>
          <p className="teaser-card__text">
            {description}
          </p>
          <ul className="teaser-card__byline">
            {authors ? authors.references.map(author => resolveAuthorName(author.id)) : ''}
            <li>{date}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default BlogTeaser
