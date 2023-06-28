import { userPhotos } from "./userPhotos.js";
import fs from "fs";
import http from "http";

fs.writeFileSync("photos.txt", JSON.stringify(userPhotos));

http
  .createServer(function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500"); // Добавлен этот заголовок

    res.writeHead(200, { "Content-Type": "application/json" });

    const url = req.url;
    const method = req.method;

    if (method === "GET") {
      if (url === "/photos") {
        const data = fs.readFileSync("photos.txt", "utf8");
        res.write(data);
        res.end();
      }
    }
  })
  .listen(4001, function () {
    console.log("server is started on 4001 port");
  });
