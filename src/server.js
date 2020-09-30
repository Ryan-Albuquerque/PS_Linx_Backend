const express = require('express')
const cors = require('cors')

const routes = require('./routes')
const port = 3333 || process.env.PORT

const app = express()

require('./database/mongoose/index')

app.use(express.json())
app.use(cors())
app.use(routes)

app.listen(port, ()=>{
    console.log(`API rodando na porta ${port}`)
})