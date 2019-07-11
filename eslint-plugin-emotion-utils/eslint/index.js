const noFunctionCall = require('./no-function-call');

module.exports = {
  rules: {
    'no-function-call': noFunctionCall,
  },
  rulesConfig: {
    'no-function-call': 1,
  },
};
