const { promisify } = require('util')
const fs = require('fs')
const checker = promisify(require('license-checker').init)

module.exports = async rootPath => {
  const moduleInfos = await executeLicenseChecker(rootPath)
  return Object.keys(moduleInfos).map(packageName => {
    const moduleInfo = moduleInfos[packageName]
    return {
      project: packageName.replace(/@[^@]*$/, ''),
      license: moduleInfo.licenseFile
        ? fs.readFileSync(moduleInfo.licenseFile, 'utf-8')
        : moduleInfo.licenses,
    }
  })
}

const executeLicenseChecker = rootPath => {
  return checker({
    start: rootPath,
    production: true,
  })
}
