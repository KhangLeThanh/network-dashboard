// jest.config.cjs (using CommonJS syntax)
module.exports = {
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest", // Handle TypeScript files
    "^.+\\.jsx?$": "babel-jest", // If you're using Babel for JS files
  },
  testEnvironment: "jsdom", // Set up jsdom for React testing
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"], // Reference the updated jest.setup.js
  globals: {
    "ts-jest": {
      isolatedModules: true,
    },
  },
  moduleNameMapper: {
    "\\.css$": "identity-obj-proxy", // For CSS modules or static assets
  },
  extensionsToTreatAsEsm: [".ts", ".tsx"], // Treat .ts and .tsx files as ESM
  transformIgnorePatterns: [
    "node_modules/(?!(some-esm-package|another-esm-package)/)",
  ], // If you're dealing with ESM packages in node_modules
};
