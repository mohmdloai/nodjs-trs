// import crypto from 'crypto';

// const hashed = crypto.createHash('sha256');
// hashed.update('sql_p@ss@321-node');
// console.log(hashed.digest('hex'));


// crypto.randomBytes(102400, (err, buffer)=>{
// 	if(err) throw err;
// 	console.log(buffer.toString('hex'));
// });


// process obj

console.log(process);
console.log(process.argv);
// [
//   '/home/arch-linux-mac/.nvm/versions/node/v22.16.0/bin/node',
//   '/home/arch-linux-mac/projects/nodjs-trs/crypto.js'
// ]

console.log(process.env);
console.log(process.env.LOGNAME);//=> arch-linux-mac

console.log(process.pid);
console.log(process.cwd());
console.log(process.memoryUsage());
console.log(process.uptime());