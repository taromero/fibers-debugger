function debug () {
  Future = Npm.require('fibers/future')
  var fut = new Future()
  var _s = Error().stack
  readline_prompt() // uncomment this to use Node's plain readline
  fut.wait()

  function readline_prompt () {
    var readline = Npm.require('readline')
    var rl = readline.createInterface({ input: process.stdin, output: process.stdout })

    rl.question('repl: ', (function (input) {
      if (input !== 'c') {
        var _s = Error().stack
        try {
          console.log(eval(input))
        } catch (e) {
          console.log(input, 'is not defined.')
        }
        rl.close()
        debug()
      }
      fut.return()
    }).future())
  }
}

fd = '(' + debug.toString() + ')()'

