module.exports = {
  env: {
    browser: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 6, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
    project: './tsconfig.json',
  },
  //Specifies the ESLint parser
  parser: '@typescript-eslint/parser',
  /**
   * 'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
   * 'plugin:@typescript-eslint/recommended', // Uses the recommended rules from @typescript-eslint/eslint-plugin
   * 'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
   * 'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
   */
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  plugins: ['react', 'prettier', 'import', 'require-path-exists', '@typescript-eslint'],
  rules: {
    'no-console': 1,

    /* Enable Prettier reports as eslint errors */
    'prettier/prettier': 'error',

    /* Skip `radix` for `parseInt` */
    radix: 'off',

    /* Turn offs  */
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',

    'react/require-extension': 'off',
    'react/jsx-space-before-closing': 'off',
    'react/destructuring-assignment': 'off',
    'react/sort-comp': 'off',

    'no-restricted-globals': 'off',
    'no-prototype-builtins': 'off',
    'no-underscore-dangle': 'off',
    'no-empty-function': 'off',
    'space-before-function-paren': 'off',
    'class-methods-use-this': 'off',
    'default-case': 'off',

    /* React */
    'react/prefer-stateless-function': [0, { ignorePureComponents: true }],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/no-unused-prop-types': ['error', { skipShapeProps: true }],

    'no-use-before-define': [
      'error',
      {
        functions: false,
        classes: true,
      },
    ],

    /* Imports */
    'import/named': 'off',

    'import/export': ['error'],
    'import/default': ['error'],
    'import/namespace': [
      'error',
      {
        allowComputed: true,
      },
    ],
    'import/extensions': [
      'error',
      {
        json: 'always',
        less: 'always',
        tsx: 'never',
        ts: 'never',
        js: 'never',
        jsx: 'never',
      },
    ],
    'import/newline-after-import': ['error'],

    'require-path-exists/exists': 'off',

    /* Debug related */
    'no-debugger': ['error'],
    'no-alert': ['error'],

    /* Lines & spacing */
    'newline-after-var': ['error', 'always'],
    'newline-before-return': ['error'],

    /**
     * Indentation:
     * turn off default one, use one which is handling both JS and TS
     */
    '@typescript-eslint/indent': 'off',

    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-object-literal-type-assertion': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',

    /* This sounds reasonable but it doesn't take into account that TS infer some types */
    '@typescript-eslint/explicit-function-return-type': 'off',

    /**
     * Those should be turned on in separate commit,
     * they should be introduced but not in scope of stack upgrade
     */
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-parameter-properties': 'off',
    '@typescript-eslint/no-triple-slash-reference': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/prefer-nullish-coalescing': [
      'error',
      {
        ignoreConditionalTests: true,
        ignoreMixedLogicalExpressions: true,
        forceSuggestionFixer: false,
      },
    ],

    '@typescript-eslint/no-empty-interface': [
      'error',
      {
        allowSingleExtends: true,
      },
    ],

    'import/extensions': 'off',
    'import/export': 'off',
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
    'import/extensions': ['.js', '.jsx'],
    'import/external-module-folders': ['node_modules'],
  },
};
