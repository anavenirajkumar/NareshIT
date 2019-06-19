// OS Module
const os = require('os');

// total memory
console.log(`Total Memory : ${os.totalmem()}`);

// Free Memory
console.log(`Free Memory : ${os.freemem()}`);

// Home Dir
console.log(`Home Dir : ${os.homedir}`);

// Computer Name
console.log(`Computer Name ${os.hostname}`);

// Up time
console.log(`Up Time : ${os.uptime}`);

// Platform
console.log(`Platform : ${os.platform()}`);

// User Information
let user = os.userInfo().username;
console.log(user);