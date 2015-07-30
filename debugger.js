function debug () {
  var inquirer = Npm.require('inquirer')
  Future = Npm.require('fibers/future')
  var fut = new Future()
  var _s = Error().stack
  // readline_prompt() // uncomment this to use Node's plain readline
  inquirer.prompt({ type: 'input', name: 'text', message: 'repl' }, (repl).future())
  fut.wait()

  function repl (_input) {
    var input = _input.text
    if (input !== 'c') {
      try {
        console.log(eval(input))
      } catch (e) {
        console.log(input, 'is not defined.')
      }
      _debug()
    }
    fut.return()
  }

  function readline_prompt() {
    var readline = Npm.require('readline')
    var rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    })

    rl.question('repl: ', (function (input) {
      if (input !== 'c') {
        var _s = Error().stack
        try {
          console.log(eval(input))
        } catch (e) {
          console.log(input, 'is not defined.')
        }
        rl.close()
        _debug()
      }
      fut.return()
    }).future())
  }
}

fd = '(' + debug.toString() + ')()'

