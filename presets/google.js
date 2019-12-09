const Article = require('./google/schemas/Article');
const BreadcrumbList = require('./google/schemas/BreadcrumbList')
const Corporation = require('./google/schemas/Corporation')

const Google = {
  name: 'Google',
  description: 'Check for common markup used by Google',
  presets: [
    ...Object.keys(Article).map(schema => Article[schema]),
    ...Object.keys(BreadcrumbList).map(schema => BreadcrumbList[schema]),
    ...Object.keys(Corporation).map(schema => Corporation[schema])
  ]
}

module.exports = {
  Google
}