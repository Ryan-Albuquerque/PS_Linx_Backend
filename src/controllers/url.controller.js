const dotenv = require('dotenv')
dotenv.config()

const URL = require('../models/url.model')

const URLService = require('../services/url.service')

async function create (req,res){
    let body = req.body

    const id = await URLService.generateId()
    
    const shortUrl = `${process.env.customUrl}/${id}`

    body = {
        ...body,
        shortUrl
    }

    const creation = await URL.create(body)

    return res.json(creation)
}

async function GetShorted(req,res){
    const url = res.locals.url

    let newHits = url.hits + 1; 

    await URL.findOneAndUpdate({url:url.url}, {hits:newHits})

    return res.redirect(url.url)
}

async function GetTop5(req,res){
    const size = req.query.total

    let all = await URL.find({})

    all.sort((a,b) => (a.hits > b.hits) ? -1 : 1)

    all = all.slice(0,size)
    
    return res.status(200).json(all)
}

async function GetAllHits(req,res){
    const all = await URL.find({})

    let count = 0;

    all.map(el => {
        count = count + el.hits
    })

    return res.status(200).json({totalHits:count})
}

module.exports = {
    create,
    GetShorted,
    GetTop5,
    GetAllHits
}