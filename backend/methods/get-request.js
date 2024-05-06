const fs = require("fs");

module.exports = (req, res) => {
  // url in yol kismini al
  const baseUrl = req.url.substring(0, req.url.lastIndexOf("/"));

  // url i parcalara  ayir ve id parameresini al
  const id = req.url.split("/")[3];

  // res.end("GET istegi attiniz")

  if (req.url === "/api/movies") {
    res.status = 200;

    res.setHeader("Content-Type", "application/json");

    const movies = fs.readFileSync("./data/movies.json", "utf-8");

    res.end(movies);
  } else if (baseUrl === "/api/movies" && id) {
    // tek bir filmi al ve gonder

    // butun filmleri al
    let data = fs.readFileSync("./data/movies.json", "utf-8");

    // json formatindaki veri js formatina cevir
    data = JSON.parse(data);

    // filmlerin arasindan id sini belirledigimiz filmi sec
    const movie = data.movies.find((item) => item.id == id);

    if (movie) {
      //film bulunduysa
      //cevap ayarlarini belirle
      res.writeHead(200, { "Content-Type": "application/json" });

      //cevap gonder
      res.end(JSON.stringify(movie));
    } else {
      //film bulunamadiysa
      //cevap ayarlarini belirle
      res.writeHead(404, { "Content-Type": "application/json" });

      //cevap gonder
      res.end(
        JSON.stringify({ message: "Aradiginiz Filmin ID degeri yanlistir" })
      );
    }
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        title: "Bulunamadi",
        message: "Istek Attiginiz Yol Gecersiz",
      })
    );
  }
};
