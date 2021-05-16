module.exports = {
  apps: [
    {
      name: "books-api",
      script: "./dist/index.js",
    },
    {
      script: "./service-worker/",
      watch: ["./service-worker"],
    },
  ],
};
