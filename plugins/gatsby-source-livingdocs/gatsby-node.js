/* eslint-disable max-len */
/* eslint-disable no-console */
const liSDK = require('@livingdocs/node-sdk')
const crypto = require('crypto')
const resolveIncludes = require('./includes')
const includesConfig = require('./includes/config')
const renderLayout = require('./includes/render')
const slugify = require('./slugify')

exports.sourceNodes = ({actions}, configOptions) => {
  if (!configOptions.design) return console.warn('config.options.design missing')
  if (!configOptions.design.name) return console.warn("config.options.design.name missing example: 'living-times'")
  if (!configOptions.design.version) return console.warn("config.options.design.version missing example: '0.0.1'")

  const {createNode} = actions

  // Gatsby adds a configOption that's not needed for this plugin, delete it
  delete configOptions.plugins

  // create a new livingdocs-client instance
  const liClient = new liSDK.Client({
    url: 'https://server.livingdocs.io',
    accessToken: configOptions.accessToken
  })

  const limit = configOptions.limit ? configOptions.limit : 10

  // get all publications (articles, authors, etc.)
  const getAllPublications = async () => liClient.getPublications({limit})

  const getPublication = async (publication, design) => {
    const livingdoc = liSDK.document.create({
      content: publication.content,
      design
    })

    if (
      publication.systemdata.documentType === 'article' ||
      publication.systemdata.documentType === 'page'
    ) {
      await resolveIncludes(livingdoc, liClient, includesConfig)
      const html = await renderLayout(livingdoc, design)
      return html
    } else {
      const article = liSDK.document.render(livingdoc)
      return article
    }
  }

  // Create your node object
  const processPublication = async (publication, design) => {
    console.log('UEUHWGUH393skdg')
    console.log(publication)
    const html = await getPublication(publication, design)
    console.log(html)
    const nodeData = {
      id: `${publication.systemdata.documentId}`,
      parent: `__SOURCE__`,
      internal: {
        type: `Publications`, // name of the graphQL query --> allPublications {}
        contentDigest: crypto.createHash(`md5`).digest(`hex`)
      },
      children: [],
      publication, // the graphQL content, schema automatically created by gatsby
      extra: {
        slug: slugify(publication.metadata.title, publication.systemdata.documentId),
        html
      }
    }
    return nodeData
  }
  async function createNodes () {
    const allPublications = await getAllPublications()
    if (!allPublications.length) {
      console.warn(`
      ALERT! Livingdocs-gatsby-plugin has not found any publications.
      Are you sure you've added published documents to livingdocs?
      `)
    }

    const design = await liClient.getDesign({
      name: configOptions.design.name,
      version: configOptions.design.version
    })
    if (!design) console.warn('ALERT! livingdocs-gatsby-plugin: design could not be loaded')
    for (const publication of allPublications) {
      const nodeData = await processPublication(publication, design)
      createNode(nodeData)
    }
  }

  return createNodes()
}
