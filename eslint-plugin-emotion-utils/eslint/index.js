const noFunctionCallInsideCss = require('./no-function-call-inside-css');
const noFunctionDeclarationInsideCss = require('./no-function-declaration-inside-css');

module.exports = {
  rules: {
    'no-function-call-inside-css': noFunctionCallInsideCss,
    'no-function-declaration-inside-css': noFunctionDeclarationInsideCss,
  },
  rulesConfig: {
    'no-function-call-inside-css': [0],
    'no-function-declaration-inside-css': [0],
  },
};
