const { readFile } = require('node:fs/promises');


(
    async() =>{
        console.log("Leyendo el primer archivo")
        const text = await readFile('./text1.txt' , 'utf-8')
        console.log("primer texto: " ,text)

        console.log("while do this shit: ¬¬")

        console.log("Leyendo el segundo archivo")
        const text2 = await readFile("./text2.txt", "utf-8")
        console.log("seugndo texto: " , text2)
    }
)()