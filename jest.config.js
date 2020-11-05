module.exports = {
  setupFilesAfterEnv: ["./jestSetup.js"],
  transform: {
    ".(js|jsx|ts|tsx)$": "./node_modules/babel-jest",
  },
}
