const http = require("http");
const getRequest = require("./methods/get-request.js");
const postRequest = require("./methods/post-request.js");
const deleteRequest = require("./methods/delete-request.js");

//
// server olustur

const server = http.createServer((req, res) => {
  // console.log(req.method)
  switch (req.method) {
    case "GET":
      getRequest(req, res);
      break;
    case "POST":
      postRequest(req, res);
      break;
    case "DELETE":
      deleteRequest(req, res);
      break;

    default:
      // cevabin status kodunu guncelle
      res.statusCode = 404;

      // cevaba header ekle
      res.setHeader("Content-Type", "application/json");

      // cevabin icerigi
      res.write(
        JSON.stringify({
          message: "Sayfa bulunamadi",
        })
      );
      res.end("hello");
      break;
  }
  //   res.end("hello");
});

//
// belirlenen portu dinle

const port = 5000;

server.listen(port, () => {
  console.log(`Server ${port}. porta gelen istekleri dinlemeye basladi`);
});
