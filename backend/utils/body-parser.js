// istegin body kismini olustur

module.exports = async (request) => {
  return new Promise((resolve, reject) => {
    try {
      // istegin body kismini belirle
      let body = "";

      // alinan her parcati body ye ekle
      request.on("data", (chunk) => {
        body += chunk;
      });

      // butun parcalarin bitme olayini izle
      request.on("end", () => {
        resolve(JSON.parse(body));
      });
    } catch (error) {
      reject(error);
    }
  });
};
