const mongoose = require('mongoose')
const Schema = mongoose.Schema

const body = {
    real_url: String,
    generated_url:String,
    hits:Number
}

const options = {
    collection: 'url',
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
}

const urlSchema = Schema(body, options);

module.exports = mongoose.model('Url', urlSchema)