import crypto from 'crypto';

const hashed = crypto.createHash('sha256');
hashed.update('sql_p@ss@321-node');
console.log(hashed.digest('hex'));


crypto.randomBytes(102400, (err, buffer)=>{
	if(err) throw err;
	console.log(buffer.toString('hex'));
});