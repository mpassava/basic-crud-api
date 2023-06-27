const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/productModel');
const uri = ''; // INSERT MONGO DB URI
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello NODE API');
});

app.post('/product', async(req, res) => {
    try{
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
});

async function runApp() {
    try {
        const connect = await mongoose.connect(uri);
        console.log('Connected to MongoDB');
        app.listen(3000, () => {
            console.log('Node API app is running on port 3000')
        });
    } catch (err){
        console.error(`${err.name} - ${err.message}`);
    }
};

runApp();
