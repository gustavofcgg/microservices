const express = require('express')
const { route } = require('../app')
const router = new express.Router()
router.get('/', (req,res,next)=>{
    res.status(200).send(
        {
            "nome" : "Gustavo CAMPOS ROOOOOSA"
        }
    )
})

//401 unauthorized

router.get('/privada', (req,res) => {
    const token = req.headers['n ']

    if (!token || token != 'minhaSenha') {
        return res.status(401).send('Sem autorização babaca')
    }

    res.send('Area macetada com sucesso').status(200)

})

const tokenExemplos ={
    'tokenAdmin':{role:'admin'},
    'tokenUser':{role:'user'},
    'tokenConvidado':{role:'convidado'}
}

router.get('/admin',(req,res)=>{
    const token = req.headers["authorization"]
    if (!token) {
        return res.status(401).send('Sen autorização')
        
    }
    const user = tokenExemplos[token]
    if (!user) {
        return res.status(401).send('Token invalido')
    }

    if (user.role != 'admin') {
        return res.status(403).send('SAI JAO , VAI GORA DE OUTRO')
        
    }

    return res.send('acesso livre vai na paz')


})

router.post('/submit', (req,res) =>{
    const {nome, email} = req.body;

    if (!nome || !email) {
        res.status(400).send('Béd ricuésti....')
        
    }


    res.status(201).send('Dado criado com sucesso!')
})


module.exports = router;