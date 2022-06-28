const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /products'
    })
})

router.post('/', (req, res, next) => {
    const product = {
        name: req.body.name,
        price: req.body.price
    }

    // Saving the product in the DB

    res.status(200).json({
        message: 'Created a new Product',
        productCreated: product
    })
})

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId

    if(id === 'special') {
        res.status(200).json({
            message: 'You have a SPECIAL id',
        })
    } else {
        res.status(200).json({
            message: 'You passed an ID',
        })
    }
})

router.patch('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Updating the product with productId of ' + req.params.productId
    })
})

router.delete('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Deleting the product with productId of ' + req.params.productId
    })
})

module.exports = router;