module.exports = {
  extends: ['next', 'next/core-web-vitals'],
  rules: {
    quotes: ['error', 'single'],
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'none',
      },
    ],
    'import/prefer-default-export': 'off',
    'no-console': 'warn',
    'no-var': 'error',
  },
}
