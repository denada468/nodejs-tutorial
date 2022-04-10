// CommonJS, every file is a module(by default)
// Modules - Encapsulated Code (only share minimum)

const names = require('./04-names')
const sayHi = require('./05-utils')
const mydata = require('./06-alternative-flavor')

require('./07-mind-grenade')
console.log(mydata)

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)