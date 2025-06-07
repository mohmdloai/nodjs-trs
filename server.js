import http from 'http';
const PORT=5000;
// You will send from the server to the client (ur browser !)
const server = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type': 'application/json'});
    var data = {"hello_key":"Saying Hi from the node server, in watch mode  !"};
    // res.write({"hello_key":"Saying Hi from the node server, in watch mode  !"});
    res.write(JSON.stringify(data));

    res.end();
}
);

server.listen(PORT, ()=>{
    console.log(`server runinig on port ${PORT}`);
}
);