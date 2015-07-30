# Fibers Debugger

![](https://raw.githubusercontent.com/taromero/fibers-debugger/master/readme_images/fibers-debugger.png)
![](https://raw.githubusercontent.com/taromero/fibers-debugger/master/readme_images/fibers-debugger.gif)

## REPL with breakpoints and context

This package allows to debug (in a limited way) Meteor apps (it would apply to any script run within a Fiber) in the same terminal window where you run your app (similar to how Ruby's CLI debuggers work). No need to attach external debuggers. It provides the ability to evaluate code in the context of the breakpoint.

It isn't very useful currently as it `can't be used on a plain Meteor app`. You need to bundle the app to run it as a Node app. This is because Meteor isn't currently compatible with Node's readline. If Meteor adds support for readline (or if a workaround is found) this will be more useful, as a simple debugging approach.

### How to use

1. Set a breakpoint somewhere in your code: `eval(fd)`. `fd` stands for Fibers Debugger.
2. Bundle your app (if Meteor adds support to readline this won't be necessary).
3. Run your bundled app.

### Limitations

- It isn't possible to navigate the code (step commands).
- It isn't possible to see the code context (but you can see the stack trace).
- No command history within the repl.
