const config = {
    paths: ['tests/features/**/*.feature'],
    require: ['tests/steps/**/*.ts','support/**/*.ts' ],
    requireModule: ['ts-node/register'],
    format: [
      'summary',
      'progress-bar',
      '@cucumber/pretty-formatter'
    ],
    formatOptions: { snippetInterface: 'async-await' },
    publishQuiet: true,
  };

module.exports = {
   default: config
 }