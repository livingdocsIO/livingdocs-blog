/* eslint-disable */
import React from 'react'
import Layout from '../components/layout'
import liSDK from '@livingdocs/node-sdk'
import resolveIncludes from '../includes'
import includesConfig from '../includes/config'
const renderLayout = require('../includes/render')

// create a new livingdocs-client instance
const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZSI6InB1YmxpYy1hcGk6cmVhZCIsIm5hbWUiOiJMaXZpbmdkb2NzLW9uYm9hcmRpbmciLCJwcm9qZWN0SWQiOjExMSwiY2hhbm5lbElkIjoxMDgsInR5cGUiOiJjbGllbnQiLCJqdGkiOiJlMzAzYWM2OS1hOTQwLTQ4NjYtOTViYS01ZDdkNDk3NDgwMTkiLCJjb2RlIjoiZTMwM2FjNjktYTk0MC00ODY2LTk1YmEtNWQ3ZDQ5NzQ4MDE5IiwiaWF0IjoxNTQxMDg0OTQxfQ.jB0ipjwA0hgxD1bxxZSzHIKbyw1W-swOKe8hbrScBmo'
const liClient = new liSDK.Client({
  url: 'https://server.livingdocs.io',
  accessToken: TOKEN
})

class testing extends React.Component {
  state = {
    bodyContent: (
      <body>
        <div>test</div>
      </body>
    )
  }

  async componentDidMount() {
    fetch('https://server.livingdocs.io/api/v1/documents/latestPublications?limit=50', {
      headers: new Headers({
        Authorization: `Bearer ${TOKEN}`,
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json'
      })
    }).then(res =>
      res.json().then(async data => {
        const contentType = data.filter(pub => pub.systemdata.documentType === 'page')
        const publication = contentType[0]
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
  render() {
    console.log(process.env.accessToken)
    return (
      <Layout>
        <div dangerouslySetInnerHTML={{__html: this.state.bodyContent}} />
      </Layout>
    )
  }
}

export default testing
