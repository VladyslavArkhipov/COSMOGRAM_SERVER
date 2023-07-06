import { fileURLToPath } from "url"; //импортирую функцию которая преобразовывает ЮРЛ в путь к файлу в файловой системе
import { dirname } from "path"; //импортирую функцию которая возвращает имя директории из заданного пути к файлу
import { userPhotos } from "./userPhotos.js";
import { userComments } from "./userComments.js";
import fs from "fs";
import http from "http";
import path from "path"; //модуль который позволяет работать с путями к файлам и директориям

const __filename = fileURLToPath(import.meta.url); //переменная будет содержать полный путь к текущему исполняемому файлу
const __dirname = dirname(__filename); //переменная будет содержать путь к текущей директории где находится исполняемы файл

fs.writeFileSync(
  path.join(__dirname, "photos.txt"),
  JSON.stringify(userPhotos)
); //создаю файл в текущей директории, используя функцию ДЖОИН, которая объединяет путь к директории ДИРНЭЙМ и имя файла в единый путь
fs.writeFileSync(
  path.join(__dirname, "comments.txt"),
  JSON.stringify(userComments)
); //создаю файл в текущей директории, используя функцию ДЖОИН, которая объединяет путь к директории ДИРНЭЙМ и имя файла в единый путь

const uploadDir = path.join(__dirname, "uploads"); //создаю папку в текущей директории

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
} //создает папку если она не существовала ранее

http
  .createServer(function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader("Content-Type", "application/json");

    const url = req.url;
    const method = req.method;

    if (method === "GET") {
      let filePath = "";
      if (url === "/photos") {
        filePath = path.join(__dirname, "photos.txt");
      } else if (url === "/comments") {
        filePath = path.join(__dirname, "comments.txt");
      }

      if (filePath) {
        const data = fs.readFileSync(filePath, "utf8");
        res.write(data);
        res.end();
      }
    } else if (req.method === "POST" && req.url === "/upload") {
      const filePath = path.join(uploadDir, "uploaded_file.txt"); // Путь для сохранения загруженного файла

      const writeStream = fs.createWriteStream(filePath); //передаю путь к файлу для записи файлов
      req.pipe(writeStream); // Метод связывает входной поток (запрос на сервер) с выходным потоком для записи данных в файл
      req.on("end", () => {
        console.log("File uploaded successfully");
        res.statusCode = 200;
        res.end("File uploaded successfully");
      }); //Действия по завершению загрузки файла

      writeStream.on("error", (err) => {
        console.error("Error uploading file:", err);
        res.statusCode = 500;
        res.end("Error uploading file");
      }); //действия при  ошибке записи файла
    } else {
      res.statusCode = 404;
      res.end("Not found");
    } //действия при неверном запросе
  })
  .listen(4001, function () {
    console.log("server is started on 4001 port");
  });
