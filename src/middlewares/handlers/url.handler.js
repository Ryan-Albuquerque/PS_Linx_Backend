const validator = require('valid-url')
const axios = require('axios')
const dotenv = require('dotenv')

dotenv.config()

const URL = require('../../models/url.model')


async function handleCreate (req,res,next){
    try {
        const body = req.body

        if(!body.url) throw new Error('Real URL is required')

        const response = await URL.findOne({url:body.url})

        if(response) return res.status(200).json(response)

        if(!validator.isUri(body.url)) throw new Error("URL requires 'http://' before")
        
        await axios.get(body.url)
        .catch(()=>{
            throw new Error('URL does not exists')
        })

        next()
    } catch (error) {
        res.status(400)
        res.json({message:error.message})
    }
    
}

async function handleGetShorted(req,res,next){
    try {
        const id = req.params.id

        const shortUrl = `${process.env.customUrl}/${id}`

        const url = await URL.findOne({shortUrl: shortUrl})
        
        if(!url) throw new Error('Generated URL does not working!')

        res.locals['url'] = url

        next()
    } catch (error) {
        res.status(400)
        res.json({message:error.message})
    }
}
async function handleGetTop5(req,res,next){
    try{
        const total = req.query.total

        if(!total) throw new Error('Query is required')

        next()
    }catch(error) {
        res.json(error.message).send(400)
    }
}

module.exports = {
    handleCreate,
    handleGetShorted,
    handleGetTop5
}