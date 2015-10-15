'use strict'

const nixt = require('nixt')
const fixture = require('./support/fixture')
const join = require('path').join

describe('executable', function () {
  var fx = fixture('basic')

  it('works', function (next) {
    nixt().run(join(__dirname, '../bin/docpress') + ' build')
      .cwd(fx.path())
      .end(() => {
        expect(fx.exists('_docpress/index.html')).toEqual(true)
        next()
      })
  })
})
