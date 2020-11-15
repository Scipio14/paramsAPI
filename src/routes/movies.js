const { Router } = require("express");
const router = Router();
const _ = require("underscore");

const movies = require("../sample.json");

router.get("/", (req, res) => {
  res.json(movies);
});

router.post("/", (req, res) => {
  const { title, director, year, rating } = req.body;
  if (title && director && year && rating) {
    const id = movies.length + 1;
    const newMovie = { ...req.body, id };
    console.log(newMovie);
    // res.json("saved");
    movies.push(newMovie);
    res.json(movies);
  } else {
    res.status(500).send("wrong request");
  }
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  // console.log(req.params);
  _.each(movies, (movie, i) => {
    if (movie.id == id) {
      movies.splice(i, 1);
    }
  });
  res.send(movies);
});

module.exports = router;
