module.exports = {
  root: true,
  env: {
    es2021: true,
    'vue/setup-compiler-macros': true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'airbnb-base',
    'plugin:vuejs-accessibility/recommended',
  ],
  rules: {
    'vue/no-setup-props-destructure': 'off',
    'vue/component-tags-order': ['error', {
      order: ['script', 'template', 'style'],
    }],
    'max-len': ['error', {
      tabWidth: 2,
      ignoreTrailingComments: true,
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true,
    }],
    'vue/max-attributes-per-line': ['error', {
      singleline: {
        max: 4,
      },
      multiline: {
        max: 1,
      },
    }],
    'import/prefer-default-export': 'off',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'],
        ],
        extensions: ['.js', '.vue'],
      },
    },
  },
};
