const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config()
const app = express();
const port = process.env.PORT || 5000;

//midleware
app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Server is online')
})

app.listen(port,()=>{
    console.log(`Server is runnning on port :${port}`)
})