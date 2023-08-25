const fs = require('node:fs/promises')
const path = require('node:path')
const pc = require('picocolors')

const folder = process.argv[2] ?? '.'

console.log('y acaaaa')
async function ls (folder) {
  let files
  try {
    files = await fs.readdir(folder)
  } catch (error) {
    console.error(pc.bgRed(`ERROR: noo se pudo leer directorio ${folder}`))
    process.exit(1)
  }

  const filePromises = files.map(async file => {
    const filePath = path.join(file, folder)
    let fileStats

    try {
      fileStats = await fs.stat(filePath)
    } catch (error) {
      console.error(pc.red(`ERROR: no se pudo leer el archivo ${filePath}`))
      process.exit(1)
    }
    const isDir = fileStats.isDirectory()
    const fileType = isDir ? 'd' : 'f'
    const fileSize = fileStats.size.toString()
    const fileMod = fileStats.mtime.toLocaleString()
    return `${(fileType)} ${(file.padEnd(20))} ${(fileSize.padStart(10))} ${(fileMod)}`
  })

  const fileInfo = await Promise.all(filePromises)
  fileInfo.forEach(fileInfo => { console.log(fileInfo) })
}

ls(folder)

/*
primer resultado:

PS C:\Users\santi\demo1NodeJS\mjs> node ls-advanced.js
y estoo????
y acaaaa que ondaa
avrg.mjs
y si hago esto?
fs-async-await-parallel.mjs
y si hago esto?
fs-promises.mjs
y si hago esto?
fs-readerCB.mjs
y si hago esto?
ls-advanced.js
y si hago esto?
ls.js
y si hago esto?
process.js
y si hago esto?
so-info.mjs
y si hago esto?
text1.txt
y si hago esto?
text2.txt
y si hago esto?
*/
