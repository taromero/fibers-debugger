function debug () {
  var _s = Error().stack
  var _c = arguments.callee.caller.toString()

  _debug()

  function _debug() {
    var Future = Npm.require('fibers/future')
    var readline = Npm.require('readline')

    var flow = new Future()
    var prompt = readline.createInterface({ input: process.stdin, output: process.stdout })

    prompt.question('repl: ', (function (input) {
      if (input !== 'c') {
        try {
          console.log(eval(input))
        } catch (e) {
          console.log(input, 'is not defined.')
        }
        prompt.close()
        _debug()
      }
      flow.return()
    }).future())

    flow.wait()
  }
}

fd = '(' + debug.toString() + ')()'

