import http from "http";
import fs from 'fs/promises';
import url from 'url';
import path from 'path';
const PORT = process.env.PORT;

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__filename, __dirname);

// You will send from the server to the client (ur browser !)
const server = http.createServer(async(req, res) => {
  try {
    if (req.method === "GET") {
      let file_path;
      if (req.url === "/") {
          file_path = path.join(__dirname, 'public', 'index.html');
      } else if (req.url === "/about") {
          file_path = path.join(__dirname, 'public', 'about.html');

      } else if (req.url === "/contact") {
          file_path = path.join(__dirname, 'public', 'contact.html');

      } else {
              // throw new Error("Page not found !!");

          file_path = path.join(__dirname, 'public', 'notfound.html');

      }

      const data = await fs.readFile(file_path);
      res.setHeader('Content-Type','text/html');
      res.write(data);
      res.end();
    } else {
      throw new Error("Method not allowed !!");
    }
  } catch (e) {
    res.writeHead(500, { "Content-Type": "text/plain" });
    // data = "Server Error , code: 500";
    // res.end(data);
    res.end("Server Error , code: 500");

    // console.log(e);
  }
});

server.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
