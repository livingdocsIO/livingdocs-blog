const slugify = text => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[\s\W-]+/g, '-') // Replace spaces, non-word characters and dashes with a single dash (-)
    .replace(/-$/, '') // Remove last floating dash if exists
}

module.exports = (title, documentId) => {

  // eslint-disable-next-line
  if (documentId == 29091) return title && `/${slugify(title)}-${documentId}/1`
  return title && `/${slugify(title)}-${documentId}`
}
