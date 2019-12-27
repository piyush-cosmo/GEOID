const express = require('express')
const Joi     = require('joi')
const app     = express()
const port    = 3000
require('./routes/routes')(app,port);
app.listen(port,() => console.log(`server started on port : ${port} !`))

