if (process.env.NODE_ENV == "production") {
  app.use(express.static(path.join(__dirname, "build")));
}
