'use strict'

const nixt = require('nixt')
const fixture = require('./support/fixture')
const join = require('path').join

describe('executable', function () {
  this.timeout(5000)

  var fx = fixture('basic')

  beforeEach(function () {
    process.cwd(fx.path())
    this.nixt = nixt()
      .run('rm -rf _docpress')
      .cwd(join(__dirname, '../bin'))
  })

  it('works', function (next) {
    this.nixt.run('./docpress')
    .end(() => {
      expect(fx.exists('_docpress/index.html')).toEqual(true)
      next()
    })
  })
})
