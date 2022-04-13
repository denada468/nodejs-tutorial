const path = require('path')

console.log(path.sep)

const filePath = path.join('/code sample','','')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname,'code sample','subfolder','test.txt')
console.log(absolute)