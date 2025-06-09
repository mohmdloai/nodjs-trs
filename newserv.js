import { createServer } from 'http';
const PORT = process.env.PORT;

const users = [
	{id : 1, name : 'Ahmed one '},
	{id : 2, name : 'Ahmed Two '},
	{id : 3, name : 'Ahmed Three '},
	{id : 4, name : 'Ahmed Yala '}
]

const server = createServer(
	(req,res)=>{
		if(req.url === '/api/users' && req.method === 'GET'){
			res.writeHead(200, {"Content-Type":"application/json"});
			res.write(JSON.stringify(users));
			res.end();
		}else if(req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET' ){
			const id = req.url.split('/')[3];
			const usr = users.find(
				usr=>usr.id === parseInt(id)
				);

			if(usr){
				res.writeHead(200, {"Content-Type":"application/json"});
				res.write(JSON.stringify(usr));
				res.end();
			}else{
					res.writeHead(404, {"Content-Type":"application/json"});
					res.write(JSON.stringify({"mesg":"404 User Not Found !"}));
					res.end();
			}

		}
		else{
			res.writeHead(404, {"Content-Type":"application/json"});
			res.write(JSON.stringify({"mesg":"404 Not Found !"}));
			res.end();
		}
	}
	);

server.listen(
	PORT, ()=>{
		console.log(`listening on port ${PORT}`);
	}
	);