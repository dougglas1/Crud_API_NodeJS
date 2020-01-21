const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://douglas:douglas123@cluster0-mdv2w.mongodb.net/pessoaBD?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors())
//app.use(cors({ origin: 'http://localhost:3000' }))
app.use(express.json()); // Utilizar JSON
app.use(routes);

app.listen(3333);