module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'react', 'react-hooks'],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'prettier/@typescript-eslint',
      'plugin:prettier/recommended',
    ],
    rules: {
      // Atur aturan kustom Anda di sini jika diperlukan
    },
  };