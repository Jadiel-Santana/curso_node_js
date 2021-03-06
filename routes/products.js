const express = require('express')
const router = express.Router()


// RETORNA TODOS OS PRODUTOS
router.get('/', (req, res, next) => {
    res.status(200).send({
        message: 'Usando o GET dentro da rota de produtos'
    })
})

// INSERE UM PRODUTO
router.post('/', (req, res, next) => {
    res.status(201).send({
        message: 'Usando o POST dentro da rota de produtos'
    })
})

// RETORNA UM PRODUTO
router.get('/:id_product', (req, res, next) => {
    const id = req.params.id_product
    if(id === 'especial') {
        res.status(200).send({
            message: 'Você descobriu o ID especial',
            id: id,
        })
    } else {
        res.status(200).send({
            message: 'Usando o GET padrão com parametros',
            id: id
        })
    }
})

// ALTERA UM PRODUTO
router.patch('/', (req, res, next) => {
    res.status(201).send({
        message: 'Usando o PATCH dentro da rota de produtos'
    })
})

// EXCLUI UM PRODUTO
router.delete('/', (req, res, next) => {
    res.status(201).send({
        message: 'Usando o DELETE dentro da rota de produtos'
    })
})

module.exports = router