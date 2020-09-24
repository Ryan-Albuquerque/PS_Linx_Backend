const express = require('express')
const cors = require('cors')

const routes = require('./src/routes')

const port = 3333 || process.env.PORT

const app = express()

app.use(express.json())
app.use(cors())
app.use(routes)

app.listen(port, (req,res)=>{
    console.log(`API rodando na porta ${port}`)
})