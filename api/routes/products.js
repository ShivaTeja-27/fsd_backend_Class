const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Product = require('../model/products')

router.get('/', (req, res, next) => {
    Product.find()
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
})

router.post('/', (req, res, next) => {
    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price
    })

    // Saving the product in the DB and handling the response
    product.save()
        .then(result => {
            res.status(201).json({
                message: 'Product created successfully',
                createdProduct: result
            })
        })
        .catch( err => res.status(500).json({err}) )
})

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId
    Product.findById(id)
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
})

router.patch('/:productId', (req, res, next) => {
    const id = req.params.productId

    const updatedProduct = new Product({
        _id: id,
        name: req.body.name,
        price: req.body.price
    })

    Product.findByIdAndUpdate(id, updatedProduct)
        .then(result => res.status(200).json({
            updatedProduct: {
                _id: id,
                name: req.body.name,
                price: req.body.price
            }
        }))
        .catch(error => res.status(500).json(error))
})

router.put('/:productId', (req, res, next) => {
    const id = req.params.productId

    const updatedProduct = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price
    })

    Product.findOneAndReplace(id, updatedProduct)
        .then(result => res.status(200).json({
            updatedProduct: {
                _id: id,
                name: req.body.name,
                price: req.body.price
            }
        }))
        .catch(error => res.status(500).json(error))
})

router.delete('/:productId', (req, res, next) => {
    const id = req.params.productId
    Product.remove({_id: id})
        .then(result => {
            res.status(202).json(result)
        })
        .catch(error => {
            res.status(500).json(err)
        })
})
module.exports = router;