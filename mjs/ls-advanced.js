const fs = require('node:fs/promises')
const picocolors = require('picocolors')

const folder = process.argv[2] ?? '.'

console.log("y estoo????")
fs.readdir(folder)
.then(files =>{
    files.forEach(file =>{
        console.log(file)
        //console.log("y si hago esto?") esto se repite para cada file
    })
})
.catch(err =>{
    console.log("ERROR AL LEER DIRECTORIO" , err)
    return;
})
console.log("y acaaaa que ondaa") //se ejecuta esto segundo por debajo del primer console.log


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