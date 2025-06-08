import http from "http";
const PORT = process.env.PORT;
// You will send from the server to the client (ur browser !)
const server = http.createServer((req, res) => {

  res.writeHead(404, { "Content-Type": "application/json" });
  var data = {
    hello_key:
      "Saying Hi from the node server, in watch mode  using end directly!",
  };

  res.end(JSON.stringify(data));
});

server.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
