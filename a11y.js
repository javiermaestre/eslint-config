module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true
    }
  },
  env: {
    browser: true,
    es6: true
  },
  extends: [],
  plugins: ['jsx-a11y'],
  globals: {},
  rules: {}
};
