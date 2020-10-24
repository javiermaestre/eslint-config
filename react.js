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
  extends: ['./core.js', 'plugin:import/errors', 'plugin:import/warnings', './_prettier-react.js'],
  plugins: ['react', 'import'],
  globals: {},
  rules: {
    // React
    'react/jsx-filename-extension': 'off',
    'react/require-default-props': 'off',
    'react/prop-types': 'off',
    'react/sort-prop-types': 'error',
    // import
    'import/prefer-default-export': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ]
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
        moduleDirectory: ['node_modules', 'src']
      }
    }
  }
};
