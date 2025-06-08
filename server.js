import http from "http";
const PORT = process.env.PORT;
// You will send from the server to the client (ur browser !)
const server = http.createServer((req, res) => {

  if(req.url === '/'){
    res.writeHead(200, { "Content-Type": "text/html" });
    var data ="<h1>Saying Hi from the node server, in watch mode  using end directly!</h1>";
    res.end(data);


  }else if(req.url === '/about')
    {
      res.writeHead(200,{'Content-Type':'text/html'});
      data = "<h1>About Page</h1>";
      res.end(data);

    }else if(req.url === '/contact')
      {
        res.writeHead(200,{'Content-Type':'text/html'});
        data = "<h1>This is conact Page</h1>";
        res.end(data);

      } else {
      res.writeHead(404, { "Content-Type": "text/html" });
      data = "<h1>Page Not Found</h1>";
      res.end(data);



    }

});

server.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
