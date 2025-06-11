import { createServer } from 'http';
const PORT = process.env.PORT;

const users = [
	{id : 1, name : 'Ahmed one '},
	{id : 2, name : 'Ahmed Two '},
	{id : 3, name : 'Ahmed Three '},
	{id : 4, name : 'Ahmed Yala '}
]

// make a logger middleware

const logger = (req, res, next)=>{
	console.log(`${req.method} ${req.url} ${res.statusCode}`);
	next();
}
// Json middleware 'DRY' "application/json"

const jsonMiddleware = (req, res, next)=>{
	res.setHeader("Content-Type","application/json");
	next();
}

// Handler for GET /api/users
const fn_getUsersHandler =(req, res)=>{
	res.write(JSON.stringify(users));
	res.end();
}

// Handler for GET /api/users/:id
const fn_getUserHandler =(req, res)=>{
	const id = req.url.split('/')[3];
	const usr = users.find(
		usr=>usr.id === parseInt(id)
				);

	if(usr){
		res.write(JSON.stringify(usr));
	}else{
			res.statusCode = 404 ;
			res.write(JSON.stringify({"mesg":"404 User Not Found !"}));
		}
	res.end();
}
// NOTFOUND HANDLER
const fn_notFoundHandler = (req, res)=>{
	res.statusCode = 404 ;
	res.write(JSON.stringify({"mesg":"404 Not Found !"}));
	res.end();
}

// Create new user api => /api/users => POST

const fn_createNewUserHandler = (req, res)=>{
	let body = '';
	req.on('data', (chunk)=>{
		body += chunk.toString();// to make it json
	});
	req.on('end', ()=>{
		const newUser = JSON.parse(body); // to revert to js obj
		users.push(newUser);
		res.statusCode = 201;
		res.write(JSON.stringify(newUser)); // to make it json
		res.end();
	});
}

// server creation;
const server = createServer(
	(req,res)=>{
		logger(req, res, ()=>{
			jsonMiddleware(req, res, ()=>{
				if(req.url === '/api/users' && req.method === 'GET'){
					fn_getUsersHandler(req, res);
				}else if(req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET' ){
					fn_getUserHandler(req, res);
				}else if(req.url === '/api/users' && req.method === 'POST'){
					fn_createNewUserHandler(req, res);
				}else{
					fn_notFoundHandler(req, res);
				}
            });
        });
    }
);




server.listen(
	PORT, ()=>{
		console.log(`listening on port ${PORT}`);
	}
	);