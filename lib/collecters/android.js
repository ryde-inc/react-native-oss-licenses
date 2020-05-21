const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')

module.exports = async rootPath => {
  const report = executeLicenseReport(rootPath).filter(
    row => row.licenses.length
  )
  return report.map(row => {
    const { license, license_url: licenseUrl } = row.licenses[0]
    return {
      project: row.project,
      license: `${license}\n\n${licenseUrl}`,
    }
  })
}

const executeLicenseReport = rootPath => {
  const variant = process.env.ANDROID_VARIANT || 'release'
  const commandName = `license${capitalizeFirstLetter(variant)}Report`

  execSync(
    `cd ${path.resolve(rootPath, './android')}; ./gradlew ${commandName}`
  )
  const reportPath = path.resolve(
    rootPath,
    `./android/app/build/reports/licenses/${commandName}.json`
  )
  return JSON.parse(fs.readFileSync(reportPath, 'utf-8'))
}
