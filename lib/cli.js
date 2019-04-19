module.exports = async rootPath => {
  const results = await Promise.all([
    require('./collecters/js')(rootPath),
    require('./collecters/ios')(rootPath),
    require('./collecters/android')(rootPath),
  ])
  return results.reduce((a, e) => a.concat(e))
}
