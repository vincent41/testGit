const express = require('express')
const indexRouter = require('./router')
const app = express()
const port = 3000

app.use('/', indexRouter)

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))