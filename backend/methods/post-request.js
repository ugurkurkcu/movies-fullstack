const fs = require("fs");
const bodyParser = require("../utils/body-parser");
const crypto = require("crypto");

module.exports = async (req, res) => {
  if (req.url === "/api/movies") {
    try {
      // istegin body kismina eris
      let body = await bodyParser(req);

      if (!body.title || !body.year || !body.genre || !body.rating) {
        res.writeHead(404);
        res.end("Lutfen filmin butun alanlarini tanimlayin");
        return;
      }
      // film verisine benzersiz id ekle
      body.id = crypto.randomUUID();

      // butun filmleri al ve js verisine cevir
      let data = fs.readFileSync("./data/movies.json", "utf-8");

      data = JSON.parse(data);
      // yeni filmi butun filmlerin arasina ekle
      data.movies.push(body);

      // json dosyasini guncelle
      fs.writeFileSync("./data/movies.json", JSON.stringify(data));

      // client a cevap gonder
      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(JSON.stringify(body));
    } catch (error) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Yol Bulunamadi" }));
    }
  }
};
