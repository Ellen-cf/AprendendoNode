const express = require('express') //chamando express
const router = express.Router()

const path = require("path")

//trazer todas as rotas de usuarios para cá, tudo que tiver de users

//tudo o que tiver app, eu mudo para router

const basePath = path.join(__dirname, '../templates')


router.get('/add',(req,res) => {
    res.sendFile(`${basePath}/usersform.html`) 
})

router.post('/save', (req,res) =>{
    console.log(req.body)

    const name =req.body.name
    const age = req.body.age

    console.log(`O nome do usuário é ${name} e ele tem ${age} anos.`)

    res.sendFile(`${basePath}/usersform.html`)
})

router.get('/:id', (req,res) => {
    const id = req.params.id

    console.log(`Estamos buscando pelo usuário: ${id}`)

    res.sendFile(`${basePath}/users.html`)
})

//exportar os router e importar no principal
module.exports = router