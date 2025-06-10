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






server.listen(
	PORT, ()=>{
		console.log(`listening on port ${PORT}`);
	}
	);