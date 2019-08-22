const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const body_parser = require('body-parser')

const messages = require('./db/messages');

const app = express();

app.use(morgan('tiny')); // ovako dodajem loger , tuny je nacin kako , smao osnovne stvari   
app.use(cors());
app.use(body_parser.json()); //saljemo podateke klijentu pa nam treba parser , realno json() saljemo

app.get('/', (req, res) => {
    res.json({
        message: "Hello World Aman!"
    })
})

app.get('/messages', (req,res)=>{
    messages.getAll().then((messages) =>{
        res.json(messages)
    })
})

app.post('/messages' , (req, res) =>{
    
})

const port = process.env.port || 8080;
app.listen(port, ()=> {
    console.log(`Listening on ${port} port..`);
 })