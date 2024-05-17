import antfu from '@antfu/eslint-config'

export default antfu({
  rules: {
    'no-console': 0,
    'style/comma-dangle': 0,
    'style/brace-style': 0,
    'style/quote-props': 0,
  },
  files: [
    'packages/**/*.ts',
    'packages/**/*.vue',
  ],
})
