const liSDK = require('@livingdocs/node-sdk')

module.exports = async function renderLayout (livingdoc, design) {
  const wrapperLivingdoc = await liSDK.document.create({content: {}, design})

  const tree = wrapperLivingdoc.componentTree

  const layoutComponent = tree.createComponent('article-layout')

  const contentContainer = layoutComponent.containers.get('content')
  contentContainer.appendTree(livingdoc.componentTree)
  tree.append(layoutComponent)
  return liSDK.document.render(wrapperLivingdoc)
}
