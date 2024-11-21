const sharedConfig = require("@repo/tailwind-config");

module.exports = {
  ...sharedConfig,
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Add paths to your app’s files here
  ],
};
