const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config()

mongoose.connect(`${process.env.mongosrv}`, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

mongoose.connection.on('connected', ()=>{
    console.log('MongoDB conectado com sucesso!')
} )

mongoose.connection.on('error', ()=>{
    console.log('Erro ao estabelecer conexão com MongoDB!')
})

mongoose.connection.on('disconnected', ()=>{
    console.log('MongoDB desconectado!')
})