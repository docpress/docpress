'use strict'

var join = require('path').join
var fs = require('fs')

function Fixture (path) {
  if (!(this instanceof Fixture)) return new Fixture(path)
  this.root = path
}

Fixture.root = join(__dirname, '../../fixture')

Fixture.prototype.path = function (file) {
  return join(Fixture.root, this.root, file || '')
}

Fixture.prototype.exists = function (file) {
  try {
    fs.statSync(this.path(file))
    return true
  } catch (e) { return false }
}

Fixture.prototype.read = function (file) {
  return fs.readFileSync(this.path(file), 'utf-8')
}

module.exports = Fixture
