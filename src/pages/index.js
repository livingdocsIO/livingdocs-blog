import React from 'react'
import {graphql} from 'gatsby'
import TeaserCard from '../components/teaserCard'
import TeaserFeatureCard from '../components/teaserFeatureCard'
import Layout from '../components/layout'

// The homepage. This could also be done in Livingdocs
class Homepage extends React.Component {
  render () {
    const intialPostData = this.props.data.allPublications.edges[0]
    return (
      <Layout>
        <div className="feature-container">
          <div className="feature-container__col">
            <TeaserFeatureCard
              small={false}
              {...intialPostData.node.publication.metadata}
              slug={intialPostData.node.extra.slug}
              key={intialPostData.node.publication.systemdata.documentId}
            />
          </div>
          <div className="feature-container__col">
            {this.props.data.allPublications.edges.map((data, i) => {
              if (i > 3 || i === 0) return
              return (
                <TeaserFeatureCard
                  small={true}
                  {...data.node.publication.metadata}
                  slug={data.node.extra.slug}
                  key={data.node.publication.systemdata.documentId}
                />
              )
            })}
          </div>
        </div>
        <div className="container container--breath">
          <div className="container-grid container-grid--whole">
            <div className="container-grid__item">
              {this.props.data.allPublications.edges.map((data, i) => {
                if (i < 3) return
                return (
                  <TeaserCard
                    {...data.node.publication.metadata}
                    slug={data.node.extra.slug}
                    key={data.node.publication.systemdata.documentId}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

// get all publications that equal(eq) the "regular" content-type
export const query = graphql`
  query {
    allPublications(filter: {publication: {systemdata: {contentType: {eq: "regular"}}}}) {
      edges {
        node {
          extra {
            slug
          }
          publication {
            metadata {
              authors {
                references {
                  id
                }
              }
              flag
              title
              description
              publishDate
              teaserImage {
                originalUrl
              }
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
export default Homepage
