const fs = require("fs");

module.exports = (req, res) => {
  // url in yol kismini al
  const baseUrl = req.url.substring(0, req.url.lastIndexOf("/"));

  // url iparcalara ayir ve id parametresini al
  const id = req.url.split("/")[3];
  if (baseUrl === "/api/movies" && id) {
    // butun filmleri al
    let data = fs.readFileSync("./data/movies.json", "utf-8");
    data = JSON.parse(data);

    // id li film dizide var mi kontrol et yoksa hata ver
    const foundItem = data.movies.find((item) => item.id == id);

    // film dizide yoksa hata ver
    if (!foundItem) {
      res.writeHead(404);
      return res.end("Id Gecersiz");
    }

    // diziden id si girilen filmi kaldir
    const filtered = data.movies.filter((item) => item.id != id);
    data.movies = filtered;

    // json dosyasini guncelle
    fs.writeFileSync("./data/movies.json", JSON.stringify(data));

    // client e cevap gonder
    res.writeHead(204, { "Content-Type": "application/json" });
    res.end();
  } else {
    res.writeHead(404);
    res.end("Yol Bulunamadi");
  }
};
