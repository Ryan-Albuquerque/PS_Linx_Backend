const URL = require('../../models/url.model')


async function handleCreate (req,res,next){
    try {
        const body = req.body

        if(!body.real_url){
            return res.status(400).json({error: "Real URL is required"})
        }

        const response = await URL.findOne({real_url:body.real_url})

        if(response){
            return res.status(400).json(response)
        }

        
        next()
    } catch (error) {
        throw error
    }
    
}

module.exports = {
    handleCreate
}