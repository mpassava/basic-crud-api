const express = require('express');
const mongoose = require('mongoose');
const app = express();
const uri = ''; // INSERT MONGO DB URI

app.get('/', (req, res) => {
    res.send('Hello NODE API');
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