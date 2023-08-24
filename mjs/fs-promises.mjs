import fs from 'node:fs/promises'
//esto esta hecho con promesas, NO CON CALLBACKS (opcional: hacer un archivo aparte usando callbacks para ver la diferencia)
console.log("Leyendo el primer archivo...")
fs.readFile('./text1.txt' , 'utf8')
.then(text =>{
    console.log("primer texto: ", text)
})

console.log("Do this while the files are reading, can u pls?????")

console.log("Leyendo el segundo archivo...")

console.log("WHAT TA FUCK IS GOING ON HEEEEEREEEEEE")
fs.readFile('./text2.txt' , 'utf8')
.then(text2 =>{
    console.log("segundo texto: ", text2)
})