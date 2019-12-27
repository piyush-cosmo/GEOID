const express = require('express')
const serve = express()
const port = 3000
serve.get('/',(req,res)=>res.send(`started on port : ${port} !`))
serve.listen(port,() => console.log(`server started on port : ${port} !`))

