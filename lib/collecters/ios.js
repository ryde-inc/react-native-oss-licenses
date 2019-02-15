const fs = require('fs')
const glob = require('glob')
const path = require('path')
const plist = require('plist')

module.exports = async rootPath => {
  const acknowledgements = readPodsAcknowledgements(rootPath)
  return acknowledgements.PreferenceSpecifiers.filter(dict => dict.License).map(
    dict => ({
      project: dict.Title,
      license: dict.FooterText,
    })
  )
}

const readPodsAcknowledgements = rootPath => {
  const acknowledgementsPath = detectPodsAcknowledgementsPath(rootPath)
  return plist.parse(fs.readFileSync(acknowledgementsPath, 'utf8'))
}

const detectPodsAcknowledgementsPath = rootPath => {
  const pattern = path.resolve(
    rootPath,
    './ios/Pods/Target Support Files/Pods-*/Pods-*-acknowledgements.plist'
  )
  return glob.sync(pattern)[0]
}
