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
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "/src/index.js"
  ],
};
