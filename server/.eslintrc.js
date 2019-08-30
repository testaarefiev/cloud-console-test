module.exports = {
  env: {
    commonjs: true,
    es6: false,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2015,
  },
  rules: {
  },
};