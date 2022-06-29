const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: mongoose.SchemaTypes.String,
    price: mongoose.SchemaTypes.String
})
module.exports = mongoose.model('Product', productSchema)