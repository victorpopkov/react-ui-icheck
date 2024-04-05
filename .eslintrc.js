module.exports = {
  extends: ['airbnb', 'plugin:prettier/recommended'],
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  ignorePatterns: ['lib/'],
  parser: '@babel/eslint-parser',
  rules: {
    'jsx-a11y/label-has-associated-control': 0,
    'no-console': 0,
    'react/jsx-props-no-spreading': 0,
  },
  overrides: [
    {
      files: ['*.test.jsx', '*.spec.jsx'],
      rules: {
        'import/no-extraneous-dependencies': 0,
      },
    },
  ],
};
