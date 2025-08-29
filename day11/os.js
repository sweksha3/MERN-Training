const os = require('os')        //most imp line and should always be on top
const { uptime } = require('process')
const myDir=("My home dir is "+os.homedir())
console.log(myDir)
const platform = `I use ${os.platform()} platform for coding`
console.log(platform)
const freeSpace = os.freemem()/1024
const freeGB = freeSpace/1024

console.log(freeGB)
console.log(os.machine())
console.log(os.release())
console.log(os.tmpdir())
console.log(os.userInfo())
console.log(os.uptime())