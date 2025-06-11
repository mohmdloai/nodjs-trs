import os from 'os';
//
// print user info :
console.log(os.userInfo());
console.log(os.userInfo().username);

console.log(os.totalmem());
console.log(os.freemem());

//cpu

console.log(os.cpus());