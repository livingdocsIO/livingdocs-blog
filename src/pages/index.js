import React from 'react'
import {graphql} from 'gatsby'
import BlogCard from '../components/blogCard'
import Layout from '../components/layout'

// The homepage. This could also be done in Livingdocs
class Homepage extends React.Component {
  /* Filter article logic start */

  state = {
    filter: 'none'
  }

  setFilter = filter => {
    this.setState({filter})
  }

  filterElements = (categorie, content) =>
    this.state.filter === 'none' ? content : this.state.filter === categorie && content

  createFilterButtons = () => (
    <header className="page-head" role="banner">
      <nav className="main-nav" role="navigation">
        {['none', 'technology', 'immigration', 'politics', 'environment'].map(filterType => (
          <div className="main-nav__item" key={filterType}>
            <a
              href={`#${filterType}`}
              onClick={() => this.setFilter(filterType)}
              style={{
                backgroundColor: this.state.filter === filterType && '#eee'
              }}
            >
              {filterType}
            </a>
          </div>
        ))}
      </nav>
    </header>
  )

  /* Filter article logic end */

  render () {
    return (
      <Layout>
        {this.createFilterButtons()}
        {this.props.data.allPublications.edges.map(data =>
          this.filterElements(
            <BlogCard
              {...data.node.publication.metadata}
              slug={data.node.extra.slug}
              key={data.node.publication.systemdata.documentId}
            />
          )
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
