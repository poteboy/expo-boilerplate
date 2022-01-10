module.exports = {
    root: true,
    env: {
      es6: true,
      node: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
        "plugin:react/recommended",
    ],
    plugins: ['react', '@typescript-eslint'],
    rules: {
      '@typescript-eslint/no-empty-function': 'warn',
      '@typescript-eslint/ban-types': [
        'error',
        {
          types: {
            '{}': false,
          },
        },
      ],
    },
  };
  