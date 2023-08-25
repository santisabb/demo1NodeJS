import fs from 'node:fs/promises'
import path from 'node:path'

const n1 = 2
const n2 = 3
console.log('y aca que pasaaaa')
Promise.all([
  fs.readFile('./text1.txt', 'utf8'),
  fs.readFile('./text2.txt', 'utf-8'),
  console.log('hacer esto ?'),
  console.log('bueno bueno, ahora esto'),
  console.log(path.sep),
  console.log('suma esto: 2 + 3=', suma(n1, n2))
]).then(([text, text2]) => {
  console.log('primer texto: ', text)
  console.log('segundo texto: ', text2)
})

function suma (nro1, nro2) {
  return nro1 + nro2
}
