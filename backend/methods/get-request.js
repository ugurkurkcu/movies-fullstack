const fs = require("fs");

module.exports = (req, res) => {
  // res.end("GET istegi attiniz")

  if (req.url === "/api/movies") {
    res.status = 200;

    res.setHeader("Content-Type", "application/json");

    const movies = fs.readFileSync("./data/movies.json", "utf-8");

    res.end(movies);
  }
};
