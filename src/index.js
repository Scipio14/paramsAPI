const express = require("express");
const app = express();
const morgan = require("morgan");

//settings

app.set("port", process.env.PORT || 4000);
app.set("json spaces", 2);

// middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//routes
app.use(require("./routes/index"));
app.use("/api/movies", require("./routes/movies"));
app.get("*", (req, res) => {
  res.status(404).send("<h1> 404 error. Page not found</h1>");
});
//Starting server
app.listen(app.get("port"), () => {
  console.log(`Server running on port ${app.get("port")}`);
});
