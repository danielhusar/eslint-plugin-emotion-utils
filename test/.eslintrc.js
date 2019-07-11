module.exports = {
  parserOptions: {
    ecmaVersion: 6,
  },
  plugins: ['eslint-plugin-emotion-utils'],
  rules: {
    'eslint-plugin-emotion-utils/no-function-call': [2, { fn: ['theme'] }],
  },
};
