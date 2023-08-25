const fs = require('node:fs')

fs.readdir('.', (err, files) => {
  if (err) {
    console.log('ERROR AL LEER', err)
    return
  }

  files.forEach(file => {
    console.log(file)
  })
})
