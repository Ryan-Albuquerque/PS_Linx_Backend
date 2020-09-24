const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ryan:ryan1234@cluster0.mxewm.mongodb.net/PSLINX?retryWrites=true&w=majority', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

mongoose.connection.on('connected', ()=>{
    console.log('MongoDB conectado com sucesso!')
} )

mongoose.connection.on('error', ()=>{
    console.log('Erro ao estabelecer conexão com MongoDB!')
})

mongoose.connection.on('disconnected', ()=>{
    console.log('MongoDB desconectado!')
})