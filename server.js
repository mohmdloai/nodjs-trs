import http from 'http';
const PORT=5000;
// You will send from the server to the client (ur browser !)
const server = http.createServer((req, res)=>{
    // res.writeHead(200, {'Content-Type': 'plain/text'});
    // res.writeHead(200, {'Content-Type': 'text/html'});
    // res.setHeader('Content-Type', 'text/html')
    res.writeHead(404, {'Content-Type': 'application/json'});
    var data = {"hello_key":"Saying Hi from the node server, in watch mode  using end directly!"};
    // res.write({"hello_key":"Saying Hi from the node server, in watch mode  !"});
    // res.write();
    // res.statusCode= 404; 
    res.end(JSON.stringify(data));
}
);

server.listen(PORT, ()=>{
    console.log(`server runinig on port ${PORT}`);
}
);