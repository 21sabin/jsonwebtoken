const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes/appRoutes');
const mongoose = require('./db/connection');
var app = express();

app.use(cors());
app.use(bodyParser.json())

app.use('/api',routes)


app.listen(3000,()=>{console.log("server started at 3000")})