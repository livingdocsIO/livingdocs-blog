const liSDK = require('@livingdocs/node-sdk')

module.exports = async function resolveIncludes (livingdoc, liClient, includesConfig) {
  const resolverTasks = startResolverTasks(livingdoc, liClient, includesConfig)
  for (const task of resolverTasks) {
    const {serviceName, resolver} = task
    try {
      await resolver
    } catch (err) {
      err.message = `Include resolver for "${serviceName}" failed with: ${err.message}`
      throw err
    }
  }
}

function startResolverTasks (livingdoc, liClient, includesConfig) {
  const includeMap = liSDK.document.getIncludes(livingdoc)
  return Object.keys(includeMap).map(serviceName => {
    switch (serviceName) {
      case 'teaser':
        return {
          serviceName: 'teaser',
          resolver: require('./teaser')({
            liClient,
            livingdoc,
            includes: includeMap['teaser'],
            includeConfig: includesConfig['teaser']
          })
        }

      default:
        const message = `There is no include resolver for service "${serviceName}"`
        throw new Error(message)
    }
  })
}
