const dotenv = require('dotenv')
dotenv.config()

const URL = require('../models/url.model')

const SortService = require('../middlewares/services/sort.service')

async function create (req,res){
    let body = req.body

    const sorted = await SortService.sortLetter()
    
    const generated_url = `${process.env.customUrl}/${sorted}`

    body = {
        ...body,
        generated_url
    }

    const creation = await URL.create(body)

    return res.json(creation)
}

module.exports = {
    create
}