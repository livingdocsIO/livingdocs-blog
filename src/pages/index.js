import React from 'react'
import {graphql} from 'gatsby'
import BlogCard from '../components/blogCard'
import Layout from '../components/layout'

// The homepage. This could also be done in Livingdocs
class Homepage extends React.Component {

  render () {
    return (
      <Layout>
        {this.props.data.allPublications.edges.map(data =>
          <BlogCard
            {...data.node.publication.metadata}
            slug={data.node.extra.slug}
            key={data.node.publication.systemdata.documentId}
          />
        )}
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
