// jest.setup.js
require("@testing-library/jest-dom");
// Polyfill TextEncoder/TextDecoder for Jest in Node.js environment
global.TextEncoder = require("util").TextEncoder;
global.TextDecoder = require("util").TextDecoder;
