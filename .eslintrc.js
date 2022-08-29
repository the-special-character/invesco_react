module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  parser: '@babel/eslint-parser',
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    'react/jsx-props-no-spreading': 0,
    'no-plusplus': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
