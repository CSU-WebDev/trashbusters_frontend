export default {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  transformIgnorePatterns: [
    "node_modules/(?!axios)"
  ],
  transform: {
    "^.+\\.(js|jsx|mjs)$": "babel-jest",
  },
};
