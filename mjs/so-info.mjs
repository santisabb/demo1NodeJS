import os from 'node:os'

console.log("System name is: " + os.platform())
console.log("System version is:" + os.release())
console.log("Systems CPUs:" + os.cpus())
