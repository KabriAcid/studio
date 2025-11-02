const path = require("path");

module.exports = {
  // ...existing code...
  output: "export",
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "src"),
    };
    return config;
  },
};
