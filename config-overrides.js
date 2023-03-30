const path = require("path");

module.exports = function override(config, env) {
  config.resolve = {
    ...config.resolve,
    alias: {
      "@src": path.resolve(__dirname, "src"),
      "@components": path.resolve(__dirname, "src/components"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@images": path.resolve(__dirname, "src/assets/images"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@container": path.resolve(__dirname, "src/container"),
      "@constants": path.resolve(__dirname, "src/constants"),
      "@hook": path.resolve(__dirname, "src/hook"),
      "@redux": path.resolve(__dirname, "src/redux"),
      "@core": path.resolve(__dirname, "src/core"),
      "@stories": path.resolve(__dirname, "src/stories")
    },
  };
  return config;
};
