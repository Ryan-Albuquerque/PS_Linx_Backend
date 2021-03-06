const mongoose = require('mongoose')
const Schema = mongoose.Schema

const body = {
    url: {
        type:String,
        required:true
    },
    shortUrl:{
        type:String,
        required:true
    },
    hits:{
        type:Number,
        default:0
    }
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