const join = require('path').join
const resolve = require('path').resolve
const spawnSync = require('child_process').spawnSync

/**
 * Delegates to a the local version of an executable if available.
 */

module.exports = function delegateBin (bin) {
  var binPath = join(process.cwd(), 'node_modules', '.bin', bin)

  if (exists(binPath) && resolve(process.argv[1]) !== resolve(binPath)) {
    var result = spawnSync(binPath, process.argv.slice(2), {
      stdio: 'inherit'
    })
    if (result.error) {
      console.error('! Error: failed to invoke ' + bin + ' from node_modules.')
      console.error('  ' + result.error.message)
      process.exit(result.status || 1)
    }
    process.exit(result.status)
  }
}

function exists (filename) {
  try {
    return require('fs').statSync(filename)
  } catch (e) {}
}
