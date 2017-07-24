/* TASK 0.5
  ГОТОВО: Добавить кота в ваш КОД в Node.js !!
  КОТА ОСТАВИТЬ
  Добавить проверку на существование файла
  
*/

const http = require("http");
const fs = require("fs");

http
    .createServer((request, response) => {
        let {
            url
        } = request;
        if (url.includes("favicon")) return;
        if (url === "/") {
            const indexHTML = fs.readFileSync("./index.html");
            response.end(indexHTML);
        } else {
            if (fs.existsSync(`.${url}`)) {
                const file = fs.readFileSync(`.${url}`);
                response.end(file);
            }
        }
    })
    .listen(3000, "localhost", err => {
        if (err) console.log(err);
        console.log("server running at localhost:3000");
    });