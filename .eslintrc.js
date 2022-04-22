module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": "plugin:react/recommended",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    'arrow-parens': 2,
    'arrow-spacing': 2,
    camelcase: 0,
    'comma-dangle': 2,
    'consistent-return': 0,
    curly: 2,
    'indent': ['error', 2],
    'eol-last': 2,
    eqeqeq: [2, 'smart'],
    'func-call-spacing': [2, 'never'],
    'key-spacing': 2,
    'keyword-spacing': 2,
    'linebreak-style': [2, 'unix'],
    'new-cap': 0,
    'no-debugger': 2,
    'no-duplicate-imports': 2,
    'no-extra-semi': 2,
    'no-loop-func': 0,
    'no-shadow': 0,
    'no-trailing-spaces': 2,
    'no-underscore-dangle': 0,
    'no-unreachable': 2,
    'no-use-before-define': [2, 'nofunc'],
    'object-curly-spacing': [2, 'always'],
    semi: [2, 'always'],
    'semi-spacing': 2,
    'space-before-blocks': 2
  }
};
