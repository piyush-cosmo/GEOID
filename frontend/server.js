const express = require('express')
const app     = express()
const port    = 5000
app.use(express.static('static'))
app.listen(port,console.log(`started on port:${port}`))


