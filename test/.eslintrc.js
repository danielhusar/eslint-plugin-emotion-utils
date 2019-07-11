module.exports = {
  parserOptions: {
    ecmaVersion: 6,
  },
  plugins: ['eslint-plugin-emotion-utils'],
  rules: {
    'emotion-utils/no-function-call-inside-css': [2, [{ name: 'theme' }]],
    'emotion-utils/no-function-declaration-inside-css': [2],
  },
};
