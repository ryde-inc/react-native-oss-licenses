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
  const variant = process.env.ANDROID_VARIANT || "release"
  console.log("variant: ", variant);

  const commandName = `license${capitalizeFirstLetter(variant)}Report`
  console.log("commandName:", commandName);

  execSync(
    `cd ${path.resolve(rootPath, './android')}; ./gradlew ${commandName}`
  )
  const reportPath = path.resolve(
    rootPath,
    `./android/app/build/reports/licenses/${commandName}.json`
  )
  return JSON.parse(fs.readFileSync(reportPath, 'utf-8'))
}

const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
