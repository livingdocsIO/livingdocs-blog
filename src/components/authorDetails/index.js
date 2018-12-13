import React from 'react'

const authorCard = props => (
  <main className="wrapper wrapper--article" role="main">
    <article className="article-content">
      <div className="article-content__body">
        <main className="article-content__main">
          <div className="author-card author-card--big">
            <div className="author-card__image">
              <img alt="" src={props.authorImage} />
            </div>
            <div className="author-card__body">
              <h2 className="author-card__title">{props.title}</h2>
              <div dangerouslySetInnerHTML={{__html: props.biography}} />
            </div>
          </div>
        </main>
      </div>
    </article>
  </main>
)

export default authorCard
