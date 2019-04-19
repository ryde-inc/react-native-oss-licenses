const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')

module.exports = async rootPath => {
  const report = executeLicenseReport(rootPath)
  return report.map(row => {
    const { license, license_url: licenseUrl } = row.licenses[0]
    return {
      project: row.project,
      license: `${license}\n\n${licenseUrl}`,
    }
  })
}

const executeLicenseReport = rootPath => {
  execSync(
    `cd ${path.resolve(rootPath, './android')}; ./gradlew licenseReleaseReport`
  )
  const reportPath = path.resolve(
    rootPath,
    './android/app/build/reports/licenses/licenseReleaseReport.json'
  )
  return JSON.parse(fs.readFileSync(reportPath, 'utf-8'))
}
