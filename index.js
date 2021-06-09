const express = require('express')
const app = express()
const port = process.env.PORT

app.get('/', function (req, res) {
  res.send('Hello Kitty!')
})

app.listen(port, function () {
  console.log(`Example app listening at http://localhost:${port}`)
})
