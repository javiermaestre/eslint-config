// All the avaible rules in detail: https://eslint.org/docs/rules/
module.exports = {
  extends: ['airbnb'],
  rules: {
    'comma-dangle': ['error', 'only-multiline'], // Require trailing-comma only on multilines: https://eslint.org/docs/rules/comma-dangle#options-14
    'object-curly-newline': 'off', // Can be managed with prettier rules
    'max-len': ['error', { code: 120, tabWidth: 2, ignoreComments: true }], // It's aligned with the config of .prettierrc.js
    'implicit-arrow-linebreak': 'off', // Prettier will manage this rule
    'function-paren-newline': 'off' // Prettier will manage this rule
  }
};
