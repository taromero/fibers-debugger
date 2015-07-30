Package.describe({
  name: 'canotto90:fibers-debugger',
  version: '0.0.4',
  summary: 'REPL with context on breakpoints, in the same terminal window where you run the fibers app.',
  git: 'https://github.com/taromero/fibers-debugger.git',
  documentation: 'README.md'
})

Npm.depends({
  inquirer: '0.9.0'
})

Package.onUse(function (api) {
  api.addFiles('debugger.js')
  api.export('inquirer', 'server')
  api.export('readline', 'server')
  api.export('fd', 'server')
})
