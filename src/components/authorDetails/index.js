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
          {/* <div className="container container--lined">
            <h2 className="container__title">Recent Work</h2>
            <div className="container-grid container-grid--whole">
              <div className="container-grid__item">
                <div className="placeholder--teaser-card teaser-card--left-aligned-img">
                  <div className="teaser-card">
                    <figure className="teaser-card__figure">
                      <a href="/article/a-chicago-cop-s-facebook-posts-and-a-city-s-struggle-with-racism/2516">
                        <img
                          className="teaser-card__image"
                          src="https://livingdocs-images.imgix.net/2018/8/22/eefb732a-9a55-4bd9-bfb8-7e3ba909de2f.jpeg?w=1024&amp;auto=format"
                        />
                      </a>
                    </figure>
                    <div className="teaser-card__body">
                      <span className="teaser-card__flag">Politics</span>
                      <h2 className="teaser-card__title">
                        <a href="/article/a-chicago-cop-s-facebook-posts-and-a-city-s-struggle-with-racism/2516">
                          A Chicago Cop’s Facebook Posts and a City’s Struggle
                          With Racism
                        </a>
                      </h2>
                      <p className="teaser-card__text">
                        In 50 years, only one officer has been fired for abuse
                        involving racial or ethnically biased language.
                      </p>
                      <ul className="teaser-card__byline">
                        <li>
                          by{' '}
                          <a href="/article/jodi-cohen/2531">Jodi S. Cohen</a>
                        </li>
                        <li>01/26/2018</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </main>
      </div>
    </article>
  </main>
)

export default authorCard
