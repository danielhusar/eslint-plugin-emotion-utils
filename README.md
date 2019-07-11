# eslint-plugin-emotion-utils [![Build Status](https://travis-ci.org/danielhusar/eslint-plugin-emotion-utils.svg?branch=master)](https://travis-ci.org/danielhusar/eslint-plugin-emotion-utils)
> Emotion eslint plugin helpful utils. See the [rules](#rules) section for all available rules.

> **Caveat:** This plugin doesn't check where the `css` function is defined so it's possible you get some false positives.

## Install

```sh
yarn add --dev eslint-plugin-emotion-utils
```
or
```sh
npm install --dev eslint-plugin-emotion-utils
```

## Usage

`.eslintrc.js`

```js
plugins: ['eslint-plugin-emotion-utils'],
rules: {
  'emotion-utils/no-function-declaration-inside-css': [2, { message: 'My custom error message' }],
  'emotion-utils/no-function-call-inside-css': [2, [{ name: 'theme', message: 'My custom message' }]],
},
```

## Rules

### `emotion-utils/no-function-declarations-inside-css`

> Disables function declarations inside of `css` helper.

```js
const styles = css`
  ${() => css`display: block;`}

  ${function() {
    return css`display: block;`;
  }}
`;
```

### `emotion-utils/no-function-call-inside-css`

> Disables function calls inside of `css` helper. Second argument is array of function names to be considered as violation.

```js
const theme = () => ({ theme }) => theme.display;
const styles = css`
  display: ${theme()};
`;
```

## License
MIT
