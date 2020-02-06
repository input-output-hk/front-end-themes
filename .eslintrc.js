module.exports =  {
  parser:  'babel-eslint',
  extends:  [
    'standard',
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings'
  ],
  rules:  {
    'import/no-unresolved': 'error',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/default': 'error',
    'import/export': 'error'
  },
  settings:  {
    'import/ignore': [ 'node_modules/*' ]
  }
}
