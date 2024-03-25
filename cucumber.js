const getWorldParams = () => {
  const params = {
    foo: 'bar',
  };

  return params;
};

const config = {
    paths: ['tests/features/**/*.feature'],
    require: ['tests/steps/**/*.ts','support/**/*.ts' ],
    requireModule: ['ts-node/register'],
  format: [
    'json:reports/cucumber-report.json',
    'html:reports/report.html',
    'summary',
    'progress-bar',
  ],
  formatOptions: { snippetInterface: 'async-await' },
  worldParameters: getWorldParams(),
  publishQuiet: true,
};

  config.format.push('@cucumber/pretty-formatter')
  
module.exports = {
  default: config
}