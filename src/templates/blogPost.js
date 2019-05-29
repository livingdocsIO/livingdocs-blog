import React from 'react'
import {graphql, navigate} from 'gatsby'
import Layout from '../components/layout'
import {Twitter, openGraph, Basic} from '../components/SEO'
import {metadata} from '../../config'

// The pages created in gatsby-node.js will use this component("template" by gatsby convention)
// The data is recieved by the graphQL query from the bottom of this component
class BlogPost extends React.Component {
  // add event listeners for all <a> tags (see handleClick, for the "why")
  componentDidMount () {
    for (const x of document.body.getElementsByTagName('a')) {
      x.addEventListener('click', this.handleClick)
    }
  }
  // remove event listerns for all <a> tags
  componentWillUnmount () {
    for (const x of document.body.getElementsByTagName('a')) {
      x.removeEventListener('click', this.handleClick)
    }
  }

  // Livingdocs will send a bunch of <a/> tags
  // We don't want to reload the page, as we lose our cache / performance
  // that's why we swap out the <a/> behaviour with the gatsby "navigate"

  handleClick = event => {
    // @TODO This is a hacky approach.
    // Customize livingdocs instead to use <link> tags instead.
    // This is not possible for service customers at the moment.
    // Works for enterprise customers, please contact us if you need help regarding that
    event.preventDefault()
    const path = new URL(event.currentTarget.href).pathname
    navigate(path)
  }
  render () {
    // SEO - description | title | url
    const description = this.props.data.publications.publication.metadata.description
    const title = this.props.data.publications.publication.metadata.title
    const url = metadata.url

    // HTML - rendering the html-body
    const html = this.props.data.publications.extra.html

    return (
      <Layout>
        {/* SEO start, information for the html <head></head> */}
        <Basic
          title={title}
          description={description}
        />
        <openGraph title={title} description={description} url={url} />
        <Twitter/>
        {/* SEO start, information for the html <head></head> */}
        <div dangerouslySetInnerHTML={{__html: html}} />
      </Layout>
    )
  }
}

// in gatsby-node.js we gave a context "slug"
// we can use that to filter the matching publication and slug now
export const query = graphql`
  query($slug: String!) {
    publications(extra: {slug: {eq: $slug}}) {
      publication {
        metadata {
          title
          description
        }
      }
      extra {
        html
        slug
      }
    }
  }
`
export default BlogPost
