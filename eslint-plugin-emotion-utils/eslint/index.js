const noFunctionCallInsideCss = require('./no-function-call-inside-css');
const noFunctionDeclarationsInsideCss = require('./no-function-declarations-inside-css');

module.exports = {
  rules: {
    'no-function-call-inside-css': noFunctionCallInsideCss,
    'no-function-declarations-inside-css': noFunctionDeclarationsInsideCss,
  },
  rulesConfig: {
    'no-function-call-inside-css': [0],
  },
};
