import React from 'react'
import {Link} from 'gatsby'

const authorCard = props => (
  <main className="wrapper wrapper--article" role="main">
    <article className="article-content">
      <div className="placeholder--teaser-card">
        <div className="author-card">
          <div className="author-card__image">
            <Link to={props.slug}>
              <img alt={`author ${props.title}`} src={props.authorImage} />
            </Link>
          </div>
          <div className="author-card__body">
            <h5>{props.title}</h5>
            <p>{props.profile}</p>
            <Link to={props.slug}>All work</Link>
          </div>
        </div>
      </div>
    </article>
  </main>
)

export default authorCard
