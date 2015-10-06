var standard = require('mocha-standard')

describe('coding style', function () {
  this.timeout(5000)

  it('lib conforms to standard', standard.files([
    '*.js',
    'lib/**/*.js'
  ]))

  it('tests conform to standard', standard.files([
    'test/**/*.js'
  ], {
    global: [
      'describe', 'it', 'xdescribe', 'xit',
      'before', 'beforeEach', 'after', 'afterEach',
      'expect'
    ]
  }))
})
