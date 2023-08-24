import fs from 'node:fs'

console.log("leer primer archivo--")
const text = fs.readFileSync('./text1.txt' , 'latin1')
console.log(text)


const n1 = 2
const n2 = 3
console.log("mientras tanto hacer esta suma: 2+3= " , n1 + n2)

console.log("leer segundo archivo--")
const text2 = fs.readFileSync('./text2.txt' , 'latin1')
console.log(text2)



/*
RESULTADO AL EJECUTAR SIN readFileSync:
$ node fs-readerCB.mjs
leer primer archivo--
mientras tanto hacer esta suma: 2+3=  5
leer segundo archivo--
primer texto:  gilada gaaatoooo
wtf ru reading u ass bitch nigga
GILADAAAAA

segundo texto:  aca va a haber mas GILADAAAAA
all this text is for test only, motherfuckerrrr
aguante el dukoooo
*/

/*
RESULTADO AL EJECUTAR CON readFileSync:
$ node fs-readerCB.mjs
leer primer archivo--
gilada gaaatoooo
wtf ru reading u ass bitch nigga
GILADAAAAA

mientras tanto hacer esta suma: 2+3=  5
leer segundo archivo--
aca va a haber mas GILADAAAAA
all this text is for test only, motherfuckerrrr
aguante el dukoooo
*/