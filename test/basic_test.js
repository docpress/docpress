'use strict'

const docpress = require('../bin/docpress')
const fixture = require('./support/fixture')

describe('docpress', function () {
  let fx = fixture('basic')
  let app

  before(function () {
    app = docpress(fx.path())
  })

  before(function (next) {
    app.build((err) => {
      if (err) throw err
      next()
    })
  })

  it('works', function () {
    expect(fx.exists('_docpress'))
    expect(fx.exists('_docpress/index.html'))
  })

  it('loads default plugins', function () {
    expect(app.metadata().plugins).toBeAn('object')
  })
})
