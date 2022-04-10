const os = require('os')

// info about current user
const user =os.userInfo()
console.log(user)

//method returns system uptime in seconds

console.log(`The system uptime is ${os.uptime()/86400} days`)

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem()/1000000000,
    freeMem:os.freemem()/100000000,
}
console.log(currentOS)