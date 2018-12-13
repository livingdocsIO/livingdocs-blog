import React from 'react'
import Layout from '../components/layout'
import liSDK from '@livingdocs/node-sdk'
import resolveIncludes from '../includes'
import includesConfig from '../includes/config'
const renderLayout = require('../includes/render')

// create a new livingdocs-client instance
const liClient = new liSDK.Client({
  url: 'https://server.livingdocs.io',
  accessToken:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZSI6InB1YmxpYy1hcGk6cmVhZCIsIm5hbWUiOiJMaXZpbmdkb2NzLW9uYm9hcmRpbmciLCJwcm9qZWN0SWQiOjExMSwiY2hhbm5lbElkIjoxMDgsInR5cGUiOiJjbGllbnQiLCJqdGkiOiJlMzAzYWM2OS1hOTQwLTQ4NjYtOTViYS01ZDdkNDk3NDgwMTkiLCJjb2RlIjoiZTMwM2FjNjktYTk0MC00ODY2LTk1YmEtNWQ3ZDQ5NzQ4MDE5IiwiaWF0IjoxNTQxMDg0OTQxfQ.jB0ipjwA0hgxD1bxxZSzHIKbyw1W-swOKe8hbrScBmo'
})

const getPublication = async content => {
  const livingdoc = await liSDK.document.create({
    content
  })
  const article = liSDK.document.render(livingdoc)
  return article
}
const documentTypes = {
  page: {
    layoutComponents: {
      layout: 'page-layout',
      header: 'page-layout-header',
      headerItem: 'page-layout-header-item',
      footer: 'page-layout-footer'
    }
  },
  article: {
    layoutComponents: {
      layout: 'article-layout',
      header: 'article-layout-header',
      headerItem: 'article-layout-header-item',
      footer: 'article-layout-footer'
    }
  }
}
const defaultDocumentType = {
  defaultDocumentType: {
    layoutComponents: {
      layout: 'default-layout',
      header: 'default-layout-header',
      headerItem: 'default-layout-header-item',
      footer: 'default-layout-footer'
    }
  }
}

class testing extends React.Component {
  state = {
    bodyContent: (
      <body>
        <div>test</div>
      </body>
    )
  }
  // cmd shift $ to multi line comment

  // fetch(
  //   'https://server.livingdocs.io/api/v1/documents/4958/latestPublication',
  //   {
  //     headers: new Headers({
  //       Authorization:
  //         'Bearer ' +
  //         'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZSI6InB1YmxpYy1hcGk6cmVhZCIsIm5hbWUiOiJMaXZpbmdkb2NzLW9uYm9hcmRpbmciLCJwcm9qZWN0SWQiOjExMSwiY2hhbm5lbElkIjoxMDgsInR5cGUiOiJjbGllbnQiLCJqdGkiOiJlMzAzYWM2OS1hOTQwLTQ4NjYtOTViYS01ZDdkNDk3NDgwMTkiLCJjb2RlIjoiZTMwM2FjNjktYTk0MC00ODY2LTk1YmEtNWQ3ZDQ5NzQ4MDE5IiwiaWF0IjoxNTQxMDg0OTQxfQ.jB0ipjwA0hgxD1bxxZSzHIKbyw1W-swOKe8hbrScBmo',

  //       'Content-Type': 'application/x-www-form-urlencoded',
  //       Accept: 'application/json',
  //     }),
  //   }
  // ).then(res => res.json().then(data => console.log(data)))
  async componentDidMount () {
    fetch('https://server.livingdocs.io/api/v1/documents/latestPublications?limit=50', {
      headers: new Headers({
        Authorization:
          'Bearer ' +
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZSI6InB1YmxpYy1hcGk6cmVhZCIsIm5hbWUiOiJMaXZpbmdkb2NzLW9uYm9hcmRpbmciLCJwcm9qZWN0SWQiOjExMSwiY2hhbm5lbElkIjoxMDgsInR5cGUiOiJjbGllbnQiLCJqdGkiOiJlMzAzYWM2OS1hOTQwLTQ4NjYtOTViYS01ZDdkNDk3NDgwMTkiLCJjb2RlIjoiZTMwM2FjNjktYTk0MC00ODY2LTk1YmEtNWQ3ZDQ5NzQ4MDE5IiwiaWF0IjoxNTQxMDg0OTQxfQ.jB0ipjwA0hgxD1bxxZSzHIKbyw1W-swOKe8hbrScBmo',

        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json'
      })
    }).then(res =>
      res.json().then(async data => {
        const contentType = data.filter(pub => pub.systemdata.documentType === 'page')
        const publication = contentType[0]
        console.log(publication)
        const design = await liClient.getDesign({name: 'living-times', version: '0.0.14'})
        const livingdoc = await liSDK.document.create({
          content: publication.content,
          design
        })
        await resolveIncludes(livingdoc, liClient, includesConfig)
        const bodyContent = await renderLayout(livingdoc, design)

        this.setState({bodyContent})
        // const includes = liSDK.document.getIncludes(dataS)
      })
    )
  }
  render () {
    return (
      <Layout>
        <div dangerouslySetInnerHTML={{__html: this.state.bodyContent}} />
      </Layout>
    )
  }
}

export default testing
