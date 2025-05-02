module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: false
  },
  extends: [
    "airbnb-base",
    "prettier"
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module"
  },
  rules: {
    "no-console": "warn"
  },
  ignorePatterns: [
    "config/",
    "dist/",
    "node_modules/"
  ]
};
