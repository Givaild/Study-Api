const { application } = require('express')
const express = require ('express')

const app = express()

app.listen('3000')
app.use(express.json())

let author = 'Givaildo de Andrade'


// GET

// app.route('/').get((req,res)=> res.send('Hello'))
// app.route('/sobre').get((req,res)=> res.send('Sobre'))

//POST

// app.route('/').post((req,res)=>res.send(req.body))

//PUT
// app.route('/').put((req,res)=> {
//     author = req.body.author
//     res.send(author)
// })

//DELETE

// app.route('/:identificador').delete((req,res)=>{
//     res.send(req.params.identificador)
// })

app.route('/').post( (req,res) => {
    const {nome, cidades,series_marvel} = req.body
    res.send(`Eu me chamo ${nome} e moro na cidade de ${cidades.ja_morei[2]}, mas já morei em ${cidades.ja_morei[0]} e , ${cidades.ja_morei[1]} visitei as cidades de ${cidades.ja_visitei} asssisti as seguintes series da marvel ${series_marvel.ja_vista}, ainda não assisti ${series_marvel.nao_vista} e talvez irei ver ${series_marvel.talvez}`)
} )