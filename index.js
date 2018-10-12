const restricted = require('eslint-restricted-globals');

module.exports = {
  extends: [
    'airbnb',
    'prettier',
    'prettier/react',
    'plugin:jest/recommended',
  ],
  env: {
    node: true,
    es6: true,
  },
  plugins: ['jest', 'prettier'],
  rules: {
    'class-methods-use-this': 0,
    'import/extensions': 0,
    'import/no-dynamic-require': 0,
    'import/no-unresolved': 2,
    'import/prefer-default-export': 0,
    'new-cap': 0,
    'no-class-assign': 0,
    'no-duplicate-imports': 0,
    'no-plusplus': 0,
    'no-restricted-globals': ['error'].concat(restricted),
    'no-underscore-dangle': 0,
    'no-use-before-define': 0,
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'es5',
      },
    ],
    'react/forbid-prop-types': 1,
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['**/__tests__/**'] },
    ],
    'react/prefer-stateless-function': 0,
    'react/prop-types': 0,
    'react/require-default-props': 0,
    'react/sort-comp': 0,
    'react/destructuring-assignment': 0,
  }
};
